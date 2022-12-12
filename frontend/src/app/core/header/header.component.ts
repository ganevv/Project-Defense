import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service'
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user: IUser | null = null

  constructor(private authService: AuthService, private router: Router) { }

  get isLoggedId() {
    return this.authService.isLoggedId
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/'])
  }

  get userData() {
    return this.authService.user
  }

}
