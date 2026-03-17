import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { AuthService } from '../../servicio/authService/auth.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(30px)',
        }),
        animate(
          '600ms ease-out',
          style({
            opacity: 1,
            transform: 'translateY(0)',
          }),
        ),
      ]),
    ]),
  ],
})
export class Registro {

  usuario = {
    nombre: '',
    apellido1: '',
    apellido2: '',
    correo: '',
    password: '',
  };

  confirmPassword: string = '';

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  registrar() {

    if (this.usuario.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const registro = this.auth.register(this.usuario);

    if (registro) {
      alert('Usuario registrado correctamente');
      this.router.navigate(['/login']);
    } else {
      alert('El correo ya está registrado');
    }
  }
}