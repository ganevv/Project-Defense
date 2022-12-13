import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { startSession } from 'src/app/shared/api';
import { passwordMissMatch } from 'src/app/shared/validators/repassValidator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  validationPattern = '^[a-zA-Z0-9]{3,}@[a-z]+\.[a-z]+$'
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(5)])

  registerGroup: FormGroup = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.pattern(this.validationPattern)]),
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: this.passwordControl,
    repass: new FormControl('', [passwordMissMatch(this.passwordControl)])
    //todo names change
  })

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) { }

  errors: string | undefined = undefined

  register(): void {
    //todo maybe add repass!
    const { email, username, password } = this.registerGroup.value
    const body = { email, username, password }
    this.authService.register(body).subscribe({
      next: (userData) => {
        startSession(userData)
        this.authService.setLogin(userData, true)
        this.router.navigate(['/'])
      },
      error: (err) => {
        this.errors = err.error
      }
    })
  }
}
