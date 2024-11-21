import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  loginForm = new FormGroup({
    inputEmail: new FormControl('', [
      Validators.required,
    ]),
    inputPassword: new FormControl('', [
      Validators.required,
    ])
  })

  apiUrl: string = "http://localhost:8080/api/auth";

  errorMessage: string = "";

  constructor(private httpClient: HttpClient, private router: Router) { }

  login() {
    const formData = {
      email: this.loginForm.value.inputEmail ? this.loginForm.value.inputEmail : "",
      password: this.loginForm.value.inputPassword ? this.loginForm.value.inputPassword : ""
    }

    this.httpClient.post(this.apiUrl, formData).subscribe(
      (result) => {
        if ("id" in result) {
          const id = (result as { id: string }).id;
          localStorage.setItem("id", id);
        }

        if ("userType" in result) {
          const userType = (result as { userType: string }).userType;
          localStorage.setItem("userType", userType);
        }

        localStorage.setItem("logado", "true");

        this.router.navigate(["/my-profile"]);
      },
      (error) => {
        
        if (error.error) {
          this.errorMessage = error.error || "Ocorreu um erro ao fazer login.";;
        }
      }
    )
  }
}
