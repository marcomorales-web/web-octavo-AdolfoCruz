import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-creacion-build',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './creacion-build.html',
  styleUrls: ['./creacion-build.css'],
})
export class CreacionBuild {
  currentStep = 0;
  cards = ['Información', 'Equipamiento', 'Stats', 'Notas'];
  angle = 90;

  personaje = '';
  juego = '';
  equipamientos: any[] = [];
  stats: any[] = [];
  notas = '';

  configuraciones: any = {
    'Genshin Impact': ['Flor', 'Pluma', 'Reloj', 'Copa', 'Corona'],
    'Honkai Star Rail': ['Cabeza', 'Manos', 'Cuerpo', 'Pies', 'Esfera', 'Cuerda'],
    Default: [],
  };

  onJuegoChange() {
    const config = this.configuraciones[this.juego] || this.configuraciones['Default'];
    this.equipamientos = config.map((slot: string) => ({
      slot,
      nombre: '',
      stat: '',
    }));
  }

  agregarEquipamiento() {
    this.equipamientos.push({ slot: '', nombre: '', stat: '' });
  }

  eliminarEquipamiento(index: number) {
    this.equipamientos.splice(index, 1);
  }

  agregarStat() {
    this.stats.push({ nombre: '', valor: '' });
  }

  eliminarStat(index: number) {
    this.stats.splice(index, 1);
  }

  nextStep() {
    if (this.currentStep < this.cards.length - 1) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  getRotation(): string {
    const totalRotation = -(this.currentStep * this.angle);
    return `translate(-50%, -50%) rotate(${totalRotation}deg)`;
  }

  guardarBuild() {
    const build = {
      personaje: this.personaje,
      juego: this.juego,
      equipamientos: this.equipamientos,
      stats: this.stats,
      notas: this.notas,
    };
    const builds = JSON.parse(localStorage.getItem('builds') || '[]');
    builds.push(build);
    localStorage.setItem('builds', JSON.stringify(builds));
    console.log('Build guardada:', build);
  }
}