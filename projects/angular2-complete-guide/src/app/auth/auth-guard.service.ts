import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private as: AuthService) {}

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.as.isAuthenticated();
    }
}
