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
        throw new Error("Method not implemented.");
    }

    canContoniue(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.ifGuest(state.url) || this.router.createUrlTree(['/'])
    }
    //todo CHECK THIS!!!


    ifGuest(url: string): boolean {
        if (url === '/auth/logout' && !this.authService.isLogged) {
            this.authService.errorString = 'You must login first!'
            this.router.navigate(['/auth/login'])
            return false
        }

        if (url === '/auth/logout' && this.authService.isLogged) {
            this.authService.errorString = null
            return true
        }

        if (this.authService.isLogged) {
            this.authService.errorString = null
            return true
        }

        if (!this.authService.isLogged) {
            this.authService.errorString = 'You must login first!'
            this.router.navigate(['/auth/login'])
            return false
        }
        return false
    }
}
    //todo CHECK THIS TOOO!!!
