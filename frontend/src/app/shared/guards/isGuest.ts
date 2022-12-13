import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
    providedIn: 'root'
})

export class isGuest {
    constructor(private authService: AuthService, private router: Router, private state: RouterStateSnapshot) { }

    canContoniue(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    }
    //todo CHECK THIS!!!


    ifGuest(url: string): boolean {
        if (url === '/auth/logout' && !this.authService.isLoggedIn) {
            this.router.navigate(['/auth/login'])
            return false
        }

        if (url === '/auth/logout' && this.authService.isLoggedIn) {
            return true
        }

        if (this.authService.isLoggedIn) {
            return true
        }

        if (!this.authService.isLoggedIn) {
            this.router.navigate(['/auth/login'])
            return false
        }

        return false
    }
}
    //todo CHECK THIS TOOO!!!
