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

  constructor(public authService: AuthService, private router: Router) { }


  //todo must do loggedin ngif in html
}