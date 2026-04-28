import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HsrService {
  // URLs verificadas que devuelven el JSON correctamente
  private relicsUrl = 'https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/index/es/relics.json';
  private weaponsUrl = 'https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/index/es/light_cones.json';

  constructor(private http: HttpClient) { }

  // reliquias
  getArtifactsList(): Observable<string[]> {
    return this.http.get<Record<string, any>>(this.relicsUrl).pipe(
      map(relics => Object.keys(relics))
    );
  }

  // conos
  getWeaponsList(): Observable<string[]> {
    return this.http.get<Record<string, any>>(this.weaponsUrl).pipe(
      map(cones => Object.keys(cones))
    );
  }

  getWeaponsByType(path: string): Observable<string[]> {
    return this.http.get<Record<string, any>>(this.weaponsUrl).pipe(
      map((cones: Record<string, any>) => {
        return Object.values(cones)
          .filter((c: any) => c.path.toLowerCase() === path.toLowerCase())
          .map((c: any) => c.id.toString());
      })
    );
  }
}