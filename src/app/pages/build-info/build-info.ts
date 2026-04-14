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

  mostrarModal = false;
  personajeSeleccionado: any = null;

  constructor(private personajesService: PersonajesService) {}

abrirModal() {
  this.mostrarModal = true;

  this.personajesService.buscarPersonaje('Raiden Shogun')
    .subscribe((data: any) => {
      this.personajeSeleccionado = data.data.Character;
      console.log(this.personajeSeleccionado);
    });
}

  cerrarModal() {
    this.mostrarModal = false;
  }
}