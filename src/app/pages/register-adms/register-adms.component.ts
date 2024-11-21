import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-adms',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, HttpClientModule],
  templateUrl: './register-adms.component.html',
  styleUrl: './register-adms.component.scss'
})
export class RegisterAdmsComponent {

  adminForm = new FormGroup({
    inputName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
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
    ]),
    inputAddress: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ])
  });

  apiUrl: string = "http://localhost:8080/api/utilizadores";

  errorMessage: string = "";

  constructor(private httpClient: HttpClient, private router: Router){}

  registerAdmin(){
    const formData = {
      nome: this.adminForm.value.inputName ? this.adminForm.value.inputName : "",
      email: this.adminForm.value.inputEmail ? this.adminForm.value.inputEmail : "",
      password: this.adminForm.value.inputPassword ? this.adminForm.value.inputPassword : "",
      morada: this.adminForm.value.inputAddress ? this.adminForm.value.inputAddress : "",
      userType: "ADMINISTRADOR",
    }

    this.httpClient.post(this.apiUrl, formData).subscribe(
      (result) => {
        this.router.navigate(["/manage-users"]);
      },
      (error) => {
        if(error.error){
          console.log(error);
          this.errorMessage = error.error || "Ocorreu um erro ao fazer registo.";
        }
      }
    )
  }

}
