import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class StorekeeperguardGuard implements CanActivate {

  constructor(private authService : AuthService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.getRoleFromLocalStorage() == "Store Keeper"){
        return true
      }
      else
      {
        alert("You are not authorized to view this page");
        window.location.href = environment.frontendUrl;
        return false;
      }
  }
  
}
