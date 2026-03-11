import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-paguina-principal',
  imports: [RouterModule],
  templateUrl: './paguina-principal.html',
  styleUrl: './paguina-principal.css',
})
export class PaguinaPrincipal {

  hoverIndex: number | null = null;

  activar(index: number) {
    this.hoverIndex = index;
  }

  desactivar() {
    this.hoverIndex = null;
  }

}