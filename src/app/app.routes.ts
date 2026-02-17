import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { RecuperarContrasena } from './recuperar-contrasena/recuperar-contrasena';
import { PaguinaPrincipal } from './paguina-principal/paguina-principal';

export const routes: Routes = [
    {path: '', component: Login },
    {path: 'login', component: Login },
    {path: 'registro', component: Registro },
    {path: 'recuperar-contrasena', component: RecuperarContrasena},
    {path: 'paguina-principal', component: PaguinaPrincipal}
];
