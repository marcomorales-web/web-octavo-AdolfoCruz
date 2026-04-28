import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PersonajesService } from '../../servicio/personajesService/personajes.service';

@Component({
  selector: 'app-build-info',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './build-info.html',
  styleUrl: './build-info.css',
})
export class BuildInfo {
  juego: string = 'Genshin Impact'; 
  mostrarModal: boolean = false;
  personajeSeleccionado: any = null;

  buildData = {
    nombre: 'Raiden Shogun',
    rol: 'DPS',
    autor: 'Viajero Principal',
    fecha: '8 de febrero de 2026',
    arma: 'Relámpago Envolvente',
    stats: [
      { nombre: 'Probabilidad CRIT', valor: '65%', progresso: '65%' },
      { nombre: 'Daño CRIT', valor: '140%', progresso: '70%' },
      { nombre: 'Recarga de Energía', valor: '250%', progresso: '90%' },
      { nombre: 'Ataque', valor: '2100', progresso: '75%' }
    ]
  };

  constructor(private personajesService: PersonajesService) {}

  abrirModal() {
    this.mostrarModal = true;
    this.personajesService.buscarPersonaje('Raiden Shogun')
      .subscribe((data: any) => {
        this.personajeSeleccionado = data?.data?.Character || data;
        console.log("Datos del personaje:", this.personajeSeleccionado);
      });
  }

  cerrarModal() {
    this.mostrarModal = false;
  }
}