import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {

  private apiUrl = 'https://graphql.anilist.co';

  constructor(private http: HttpClient) {}

  buscarPersonaje(nombre: string): Observable<any> {

    const query = `
      query ($search: String) {
        Character(search: $search) {
          name {
            full
          }
          image {
            large
          }
          description
          media {
            nodes {
              title {
                romaji
              }
            }
          }
        }
      }
    `;

    const variables = {
      search: nombre
    };

    return this.http.post(this.apiUrl, {
      query,
      variables
    });
  }
}