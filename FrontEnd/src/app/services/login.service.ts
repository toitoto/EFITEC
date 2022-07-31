import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  myAppUrl: string;
  myApiUrl: string;

  constructor( private http: HttpClient ) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Login';
  }

  login( usuario: Usuario ): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, usuario);
  }

  setLocalStorage( data: string ): void {
    localStorage.setItem( 'token', data );
  }

  // getLocalStorage(): any {
  //   return localStorage.getItem( 'token' );
  // }
  getTokenDecoded(): any {
    const helper = new JwtHelperService();

    const decodedToken = helper.decodeToken( localStorage.getItem( 'token' ) as string );
    return decodedToken;
    // const expirationDate = helper.getTokenExpirationDate(myRawToken);
    // const isExpired = helper.isTokenExpired(myRawToken);
  }

  removeLocalStorage(): void {
    localStorage.removeItem( 'token' );
  }

  getToken(): string {
    return localStorage.getItem( 'token' ) as string;
  }
}
