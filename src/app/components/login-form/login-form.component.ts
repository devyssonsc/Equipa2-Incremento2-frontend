import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  loginForm = new FormGroup({
    inputEmail: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(2)
    ]),
    inputPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/(?=.*[A-Z])/),
      Validators.pattern(/(?=.*[a-z])/),
      Validators.pattern(/(?=.*[0-9])/),
      Validators.pattern(/(?=.*[!@#$%^&*])/),
    ])
  })

  login(){
    const email = this.loginForm.value.inputEmail ? this.loginForm.value.inputEmail : "";
    const password = this.loginForm.value.inputPassword ? this.loginForm.value.inputPassword : "";

    alert(email + "-" + password);
  }
}
