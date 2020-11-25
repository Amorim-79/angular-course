import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { IFormGenericModel } from './iform.model';

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanDeactivate<IFormGenericModel> {
  canDeactivate(
    component: IFormGenericModel,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return component.closeForm();
  }
}
