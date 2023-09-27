import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    //private authService: AuthService,
    private router: Router
  ) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    if (!this.form.invalid) {
      //this.authService.login(this.form.value).subscribe(() => {
      //  this.authService.getUserData().subscribe(() => {
      //    this.router.navigate(['/']);
      //  })
      //});
    }
  }
}
