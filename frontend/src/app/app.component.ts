import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { getSession } from './shared/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(private http: HttpClient, private authService: AuthService) {
    if (getSession()) {
      this.authService.setLogin(null, false)
      return
    }
    this.authService.setLogin(getSession(), true)
  }
}
