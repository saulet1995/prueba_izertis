import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movies, Response } from '../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private URL = "https://api.themoviedb.org/3/search/movie?query=";
  private language = "es-ES";
  private apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjM3OTE3N2U1NWExNmY3MzFjNzkwZTBlOTBlOGU3MiIsIm5iZiI6MTczOTgwMjgwNC4wNDE5OTk4LCJzdWIiOiI2N2IzNDhiNDVhY2E1YTcxZDI5ZmQ5MGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2rf5WOeJadIJzWxO6QsRoqDxkmDc_RvoMDT5K7cnZOM";
  private headers = { Authorization: `Bearer ${this.apiKey}` };

  constructor(public http: HttpClient) { }

  //MÉTODO QUE DEVUELVE LAS PELÍCULAS CON EL NOMBRE BUSCADO
  public getResponse(search: string, page: number): Observable<Movies[]> {
    return this.http.get<Response>(`${this.URL}${search}&language=${this.language}&page=${page}`, { headers: this.headers }).pipe(
      map((response: any) => response.results)
    );
  }
  //MÉTODO QUE DEVUELVE EL TOTAL DE PÁGINAS QUE TIENE LA BÚSQUEDA REALIZADA
  public getPages(search: string, page: number): Observable<number> {
    return this.http.get<Response>(`${this.URL}${search}&language=${this.language}&page=${page}`, { headers: this.headers }).pipe(
      map((response: any) => response.total_pages)
    );
  }

}
