import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceType } from '../../components/enums/tipo-servico.enum';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-service',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, HttpClientModule],
  templateUrl: './create-service.component.html',
  styleUrl: './create-service.component.scss'
})
export class CreateServiceComponent implements OnInit {
  ServiceType = ServiceType;
  serviceTypes: any;

  serviceForm = new FormGroup({
    inputServiceType: new FormControl(''

    ),
    inputDescription: new FormControl('', [
      Validators.required,
      Validators.maxLength(100)
    ]),
    inputPrice: new FormControl('', [
      Validators.required
    ])
  })

  apiUrl: string = "http://localhost:8080/api/servicos";

  constructor(private httpClient: HttpClient, private router: Router){}

  ngOnInit(): void {
    this.serviceTypes = Object.values(ServiceType);
  }

  createService(){
    const data = {
      titulo: this.serviceForm.value.inputServiceType ? this.serviceForm.value.inputServiceType : "",
      descricao: this.serviceForm.value.inputDescription ? this.serviceForm.value.inputDescription : "",
      valorHora: this.serviceForm.value.inputPrice ? this.serviceForm.value.inputPrice : "",
      profissional: {
        id: localStorage.getItem("id")
      }
    }

    this.httpClient.post(this.apiUrl, data).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(["/my-services"]);
      },
      (error) => {
        console.error(error.error);
      }
    )
  }

}
