import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { RecuperarContrasena } from './recuperar-contrasena/recuperar-contrasena';
import { PaguinaPrincipal } from './paguina-principal/paguina-principal';
import { CreacionBuild } from './creacion-build/creacion-build';
import { BuildInfo } from './build-info/build-info';

export const routes: Routes = [
    {path: '', component: Login },
    {path: 'login', component: Login },
    {path: 'registro', component: Registro },
    {path: 'recuperar-contrasena', component: RecuperarContrasena},
    {path: 'paguina-principal', component: PaguinaPrincipal},
    {path: 'creacion-build', component: CreacionBuild },
    {path: 'build-info', component: BuildInfo}
];