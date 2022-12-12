import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  validationPattern = '^[a-zA-Z0-9]{3,}@[a-z]+\.[a-z]+$'

  loginGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, Validators.pattern(this.validationPattern)]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(4)])
  })

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) { }

  errors: string | undefined = undefined

  login(): void {
    const { email, password } = this.loginGroup.value
    const body = { email, password }

    this.authService.login(body).subscribe({
      next: () => {
        this.router.navigate(['/'])
      },
      error: (err) => {
        this.errors = err.error
      }
    })
  }
}
