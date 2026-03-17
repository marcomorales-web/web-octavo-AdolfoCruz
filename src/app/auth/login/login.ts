import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../servicio/authService/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(30px)'
        }),
        animate('600ms ease-out', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ])
  ]
})
export class Login {

  correo: string = '';
  password: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    const inicio = this.auth.login(this.correo, this.password);

    if (inicio) {
      this.router.navigate(['/paguina-principal']);
    } else {
      alert('Correo o contraseña incorrectas');
    }
  }
}
