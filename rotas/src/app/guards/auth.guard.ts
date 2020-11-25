import { AuthService } from '../login/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean {
    if (this.authService.authorization) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

  canLoad(
    route: Route,
  ): Observable<boolean> | boolean {
    if (this.authService.authorization) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
