import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {

  private user?: User;

  signIn(username: string, password: string) {
    // TODO: make a server request to detect user;
    this.user = {
      username,
      password,
      id: '1',
      name: 'aa',
    };

    localStorage.setItem('currentUser', JSON.stringify(this.user));
    this.router.navigateByUrl('/');
  }

  constructor(private router: Router) { 
    if(localStorage.getItem('currentUser')) {
      this.user = JSON.parse(localStorage.getItem('currentUser') || '') as User;
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('in can activate', route, state);
    if (this.user) {
      return true;
    }
    return this.router.parseUrl('/sign-in');
  }
}
