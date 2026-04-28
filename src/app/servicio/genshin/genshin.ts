import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Artifact } from '../../models/artifact.model';

@Injectable({
  providedIn: 'root'
})
export class GenshinService {
  private baseUrl = 'https://genshin.jmp.blue';

  constructor(private http: HttpClient) { }

  // ARTEFACTOS
  getArtifactsList(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/artifacts`);
  }

  // ARMAS 
  getWeaponsList(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/weapons`);
  }

  getWeaponsByType(type: string): Observable<string[]> {
    return this.http.get<any[]>(`${this.baseUrl}/weapons/all`).pipe(
      map(weapons => {
        return weapons
          .filter(w => w.type.toLowerCase() === type.toLowerCase())
          .map(w => w.id);
      })
    );
  }

  getWeaponImageUrl(weaponId: string): string {
    return `${this.baseUrl}/weapons/${weaponId}/icon`;
  }
}