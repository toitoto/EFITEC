import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  myAppUrl: string;
  myApiUrl: string;

  constructor( private http: HttpClient ) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Cursos/';
  }

  saveCurso( curso: Curso ): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, curso);
  }

  getCurso( idCurso: number ): Observable<any> {
    return this.http.get( this.myAppUrl + this.myApiUrl + idCurso );
  }

  getCursos(): Observable<any> {
    return this.http.get( this.myAppUrl + this.myApiUrl + 'GetListCurso' );
  }
}
