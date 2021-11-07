import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';

@Injectable()
export class RoleGuardService implements CanActivate {


  constructor(private auth: AuthService, private router: Router) {}


  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('jwt');
    const tokenPayload = decode<JWTPayload>(token);
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    } else if (tokenPayload.roles[0] !== expectedRole) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}

export interface JWTPayload {
  sub: String;
  roles: String[];
}
