import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { startSession } from 'src/app/shared/api';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // validationPattern = '^[a-zA-Z0-9]{3,}@[a-z]+\.[a-z]+$'

  // loginFormGroup: FormGroup = this.formBuilder.group({
  //   'email': new FormControl('', [Validators.required, Validators.pattern(this.validationPattern)]),
  //   'password': new FormControl(null, [Validators.required, Validators.minLength(5)])
  // })

  // constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) { }

  // errors: string | undefined = undefined

  // login(): void {
  //   const { email, password } = this.loginFormGroup.value
  //   this.authService.login({ email, password }).subscribe({
  //     next: (userData) => {
  //       startSession(userData)
  //       this.authService.setLogin(userData, true)
  //       this.router.navigate(['/'])
  //     },
  //     error: (err) => {
  //       this.errors = err.error
  //     }
  //   })
  // }
}
