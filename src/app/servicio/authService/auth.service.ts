import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuariosKey = 'usuarios';
  private sessionKey = 'sesion';

  private platformId = inject(PLATFORM_ID);

  constructor() {}

  // helper: verificar navegador
  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  // obtener usuarios
  private getUsuarios(): any[] {
    if (!this.isBrowser()) return [];

    return JSON.parse(localStorage.getItem(this.usuariosKey) || '[]');
  }

  // guardar usuarios
  private setUsuarios(usuarios: any[]) {
    if (!this.isBrowser()) return;

    localStorage.setItem(this.usuariosKey, JSON.stringify(usuarios));
  }

  // registro
  register(data: any): boolean {
    const usuarios = this.getUsuarios();

    const existe = usuarios.find(u => u.correo === data.correo);
    if (existe) return false;

    data.id = usuarios.length + 1;
    usuarios.push(data);

    this.setUsuarios(usuarios);
    return true;
  }

  // login
  login(correo: string, password: string): boolean {
    const usuarios = this.getUsuarios();

    const usuario = usuarios.find(
      u => u.correo === correo && u.password === password
    );

    if (!usuario) return false;

    if (this.isBrowser()) {
      localStorage.setItem(this.sessionKey, JSON.stringify(usuario));
    }

    return true;
  }

  // usuario actual
  getUsuarioActual() {
    if (!this.isBrowser()) return null;

    return JSON.parse(localStorage.getItem(this.sessionKey) || 'null');
  }

  // logout
  logout() {
    if (!this.isBrowser()) return;

    localStorage.removeItem(this.sessionKey);
  }

  // validar sesión
  isLogged(): boolean {
    if (!this.isBrowser()) return false;

    return !!localStorage.getItem(this.sessionKey);
  }
}