import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../servicio/authService/auth.service';

@Component({
  selector: 'app-paguina-principal',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './paguina-principal.html',
  styleUrl: './paguina-principal.css',
})
export class PaguinaPrincipal {

  hoverIndex: number | null = null;
  mostrarPerfil: boolean = false;
  usuario: any;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.usuario = this.auth.getUsuarioActual();
  }

  activar(index: number) {
    this.hoverIndex = index;
  }

  desactivar() {
    this.hoverIndex = null;
  }

  togglePerfil() {
    this.mostrarPerfil = !this.mostrarPerfil;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}