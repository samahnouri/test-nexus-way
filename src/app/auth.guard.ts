import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(localStorage.getItem('currentUser')){
      return true;
    }
    this.router.navigate(['/login'])


    return false;

  }
  public isLoggedIn():boolean{
    let status=false;
    if(localStorage.getItem('isLoggedIn')=="true"){
      status=true;

    }
    else{
      status=false;
    }
    return status;
  }
}
