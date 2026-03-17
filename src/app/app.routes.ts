import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Registro } from './auth/registro/registro';
import { RecuperarContrasena } from './auth/recuperar-contrasena/recuperar-contrasena';
import { PaguinaPrincipal } from './pages/paguina-principal/paguina-principal';
import { CreacionBuild } from './pages/creacion-build/creacion-build';
import { BuildInfo } from './pages/build-info/build-info';

export const routes: Routes = [
    {path: '', component: Login },
    {path: 'login', component: Login },
    {path: 'registro', component: Registro },
    {path: 'recuperar-contrasena', component: RecuperarContrasena},
    {path: 'paguina-principal', component: PaguinaPrincipal},
    {path: 'creacion-build', component: CreacionBuild },
    {path: 'build-info', component: BuildInfo}
];