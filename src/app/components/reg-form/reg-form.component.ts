import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MetodoPagamento } from '../enums/metodo-pagamento.enum';
import { Especialidade } from '../enums/especialidade.enum';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-reg-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule, HttpClientModule],
  templateUrl: './reg-form.component.html',
  styleUrl: './reg-form.component.scss'
})
export class RegFormComponent implements OnInit {
  MetodoPagamento = MetodoPagamento;
  Especialidade = Especialidade;
  especialidades: any;
  metodosPagamento: any;
  
  registerForm = new FormGroup({
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
    ]),
    checkUserType: new FormControl('Cliente', [

    ]),
    inputPaymentMethod: new FormControl('', [

    ]),
    inputSpecialty: new FormControl('', [

    ]),
    inputExperience: new FormControl('', [
      
    ])
  });

  userType: string = "";

  apiUrl: string = "http://localhost:8080/api/utilizadores";
  
  constructor(private router: Router, private httpClient: HttpClient, private el: ElementRef, private renderer: Renderer2){}

  ngOnInit(): void {
    this.metodosPagamento = Object.values(this.MetodoPagamento);
    this.especialidades = Object.values(this.Especialidade);
    console.log(this.metodosPagamento);
    console.log(this.especialidades);
  }

  changeUserType(){
    this.userType = this.registerForm.value.checkUserType ? this.registerForm.value.checkUserType : ""
  }
  
  register(){
    const formData = {
      nome: this.registerForm.value.inputName ? this.registerForm.value.inputName : "",
      email: this.registerForm.value.inputEmail ? this.registerForm.value.inputEmail : "",
      password: this.registerForm.value.inputPassword ? this.registerForm.value.inputPassword : "",
      morada: this.registerForm.value.inputAddress ? this.registerForm.value.inputAddress : "",
      userType: this.registerForm.value.checkUserType ? this.registerForm.value.checkUserType.toUpperCase() : "",
      formaDePagamento: this.registerForm.value.inputPaymentMethod ? this.registerForm.value.inputPaymentMethod : "",
      especialidade: this.registerForm.value.inputSpecialty ? this.registerForm.value.inputSpecialty : "",
      experiencia: this.registerForm.value.inputExperience ? this.registerForm.value.inputExperience : "",
    }
    console.log(formData);
    this.httpClient.post(this.apiUrl, formData).subscribe(
      (result) => {
        console.log(result);
        if("id" in result){
          const id = (result as { id: string }).id;
          localStorage.setItem("id", id);
        }

        if("userType" in result){
          const userType = (result as { userType: string }).userType;
          localStorage.setItem("userType", userType);
        }

        localStorage.setItem("logado", "true");

        this.router.navigate(["/my-profile"]);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
