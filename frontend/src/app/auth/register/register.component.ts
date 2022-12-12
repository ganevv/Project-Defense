import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  validationPattern = '^[a-zA-Z0-9]{3,}@[a-z]+\.[a-z]+$'

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) { }

  errors: string | undefined = undefined

  // register(): void {
  //   const { email, username, password } = 
  // }
}
