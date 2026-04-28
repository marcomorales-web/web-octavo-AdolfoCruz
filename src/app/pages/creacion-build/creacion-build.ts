import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GenshinService } from '../../servicio/genshin/genshin';
import { HsrService } from '../../servicio/hsr/hsr';

@Component({
  selector: 'app-creacion-build',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './creacion-build.html',
  styleUrls: ['./creacion-build.css'],
})
export class CreacionBuild implements OnInit {
  currentStep = 0;
  cards = ['Información', 'Equipamiento', 'Stats', 'Notas'];

  // Datos de la Build
  personaje = '';
  juego = ''; 
  rol = ''; 
  tipoArma = '';
  imageUrl = ''; 
  armaPrincipal = ''; 
  equipamientos: any[] = [];
  stats: any[] = [];
  notas = '';

  // Listas para los dropdowns
  listaArtifactos: string[] = [];
  listaArmasFiltradas: string[] = []; 
  listaArtifactosBusqueda: string[] = [];
  listaArmasBusqueda: string[] = [];

  dropdownAbierto: number | null = null;

  // Estructura de slots según el juego
  configuraciones: any = {
    'Genshin Impact': ['Flor', 'Pluma', 'Reloj', 'Copa', 'Corona'],
    'Honkai Star Rail': ['Cabeza', 'Manos', 'Cuerpo', 'Pies', 'Esfera', 'Cuerda'],
    Default: [],
  };

  constructor(
    private genshinService: GenshinService,
    private hsrService: HsrService
  ) {}

  ngOnInit() {
    this.onJuegoChange(); 
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: any) {
    if (!event.target.closest('.custom-dropdown')) {
      this.dropdownAbierto = null;
    }
  }

  onJuegoChange() {
    const config = this.configuraciones[this.juego] || this.configuraciones['Default'];
    this.equipamientos = config.map((slot: string) => ({ slot, nombre: '', stat: '' }));
    
    // Limpiar todo para evitar ruidos de Genshin
    this.armaPrincipal = '';
    this.tipoArma = '';
    this.listaArtifactos = []; 
    this.listaArtifactosBusqueda = [];
    this.listaArmasFiltradas = [];
    this.listaArmasBusqueda = [];

    if (this.juego === 'Honkai Star Rail') {
      this.hsrService.getArtifactsList().subscribe({
        next: (data: string[]) => { 
          this.listaArtifactos = data; 
          this.listaArtifactosBusqueda = data; 
        }
      });
    } else {
      this.genshinService.getArtifactsList().subscribe({
        next: (data: string[]) => { 
          this.listaArtifactos = data; 
          this.listaArtifactosBusqueda = data; 
        }
      });
    }
  }

  filtrarArmasPorTipo() {
    if (!this.tipoArma) return;
    
    const obs = this.juego === 'Honkai Star Rail' 
      ? this.hsrService.getWeaponsByType(this.tipoArma)
      : this.genshinService.getWeaponsByType(this.tipoArma);

    // CORRECCIÓN: Se agrega ": string[]" al parámetro data
    obs.subscribe({
      next: (data: string[]) => {
        this.listaArmasFiltradas = data;
        this.listaArmasBusqueda = [...data];
      }
    });
  }

  getImageUrl(id: string, tipo: 'arma' | 'artefacto'): string {
    if (!id) return '';
    if (this.juego === 'Genshin Impact') {
      return tipo === 'arma' 
        ? `https://genshin.jmp.blue/weapons/${id}/icon`
        : `https://genshin.jmp.blue/artifacts/${id}/flower-of-life`;
    } else {
      return tipo === 'arma'
        ? `https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/light_cone/${id}.png`
        : `https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/relic/${id}.png`;
    }
  }

  buscarArma() {
    const busqueda = this.armaPrincipal.toLowerCase().trim();
    this.listaArmasBusqueda = !busqueda 
      ? [...this.listaArmasFiltradas] 
      : this.listaArmasFiltradas.filter(a => a.toLowerCase().includes(busqueda));
  }

  buscarArtefacto(index: number) {
    const busqueda = this.equipamientos[index].nombre.toLowerCase().trim();
    // Si no hay nada escrito, muestra toda la lista
    if (!busqueda) {
      this.listaArtifactosBusqueda = [...this.listaArtifactos];
      return;
    }
    this.listaArtifactosBusqueda = this.listaArtifactos.filter(art => 
      art.toLowerCase().includes(busqueda)
    );
  }

  toggleDropdown(index: number, event?: any) {
    if (event) event.stopPropagation();
    this.dropdownAbierto = this.dropdownAbierto === index ? null : index;
  }

  seleccionarSet(nombreSet: string, index: number) {
    this.equipamientos[index].nombre = nombreSet;
    this.dropdownAbierto = null;
  }

  seleccionarArma(arma: string) {
    this.armaPrincipal = arma;
    this.dropdownAbierto = null;
  }

  formatName(name: string): string {
    return name ? name.replace(/-/g, ' ').toUpperCase() : '';
  }

  nextStep() { if (this.currentStep < this.cards.length - 1) this.currentStep++; }
  prevStep() { if (this.currentStep > 0) this.currentStep--; }

  agregarEquipamiento() { this.equipamientos.push({ slot: 'Extra', nombre: '', stat: '' }); }
  eliminarEquipamiento(index: number) { this.equipamientos.splice(index, 1); }
  agregarStat() { this.stats.push({ nombre: '', valor: '' }); }
  eliminarStat(index: number) { this.stats.splice(index, 1); }
  updateUrl(event: any) { event.target.src = 'assets/img/error.png'; }

  guardarBuild() {
    const build = {
      personaje: this.personaje, juego: this.juego, rol: this.rol,
      tipoArma: this.tipoArma, imageUrl: this.imageUrl, armaPrincipal: this.armaPrincipal,
      equipamientos: this.equipamientos, stats: this.stats, notas: this.notas,
      fecha: new Date().toISOString()
    };
    const builds = JSON.parse(localStorage.getItem('builds') || '[]');
    builds.push(build);
    localStorage.setItem('builds', JSON.stringify(builds));
    alert('¡Build guardada con éxito!');
  }
}