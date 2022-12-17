import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
    providedIn: 'root'
})

export class isGuest implements CanActivate {
    constructor(private authService: AuthService, private router: Router, private state: RouterStateSnapshot) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (!this.authService.isLogged) {
            return true
        }
        this.authService.errorString = 'You are already logged in!'
        this.router.navigate(['/'])
        return false
    }
}