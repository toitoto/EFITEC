import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  myAppUrl: string;
  myApiUrl: string;

  constructor( private http: HttpClient ) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Alumnos/';
  }

  saveAlumno( alumno: Alumno ): Observable<any> {
    console.log('gfgfgh')
    return this.http.post(this.myAppUrl + this.myApiUrl, alumno);
  }

  getAlumno( idAlumno: number ): Observable<any> {
    return this.http.get( this.myAppUrl + this.myApiUrl + idAlumno );
  }

  getAlumnos(): Observable<any> {
    return this.http.get( this.myAppUrl + this.myApiUrl + 'GetListAlumno' );
  }

  updateAlumno( alumno: Alumno ): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + '/UpdateAlumno', alumno);
  }

  deleteAlumno( idAlumno: number ): Observable<any> {
    return this.http.delete( this.myAppUrl + this.myApiUrl + idAlumno );
  }
}
