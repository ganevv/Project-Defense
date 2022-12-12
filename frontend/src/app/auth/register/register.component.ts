import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  validationPattern = '^[a-zA-Z0-9]{3,}@[a-z]+\.[a-z]+$'

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern(this.validationPattern)]],
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    rePassword: []
    //todo pass and repass must be same
  })

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) { }

  errors: string | undefined = undefined

  register(): void {
    if (this.form.invalid) { return }
    const { email, username, password, rePassword } = this.form.value
    this.authService.register({ email, username, password, rePassword })
      .subscribe({
        next: () => {
          this.router.navigate(['/'])
        },
        error: (err) => {
          this.errors = err.error
        }
      })
  }
}
