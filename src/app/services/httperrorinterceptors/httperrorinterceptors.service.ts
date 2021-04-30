import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { environment } from 'src/environments/environment';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttperrorinterceptorsService {

  constructor(private authService : AuthService, private router : Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`,
        'Content-Type': 'application/json'
      }
    });

    return next.handle(request).pipe(
      catchError(
        (err, caught) => {
          if (err.status === 401){
            this.handleAuthError();
            return of(err);
          }
          throw err;
        }
      )
    );
  }

  private handleAuthError() {
    this.authService.clearLocalStorage();
    alert('Please log in again. Your session expired.')
    window.location.href = environment.frontendUrl + "login";
  }
}
