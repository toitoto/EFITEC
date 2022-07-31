import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor( private router: Router,
    private toastr: ToastrService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');

    if ( token ) {
      request = request.clone( { setHeaders: { Authorization: `Bearer ${ token }` } } );
    }
    return next.handle(request).pipe(
      catchError( ( error: HttpErrorResponse ) => {
        if ( error.status === 401 ) {
          this.toastr.error('Sesión expirada, por favor, vuelva a loguearse', 'Error!');
          this.router.navigate( ['/inicio/login'] );
        }
        return throwError(error);
      } )
    );
  }
}
