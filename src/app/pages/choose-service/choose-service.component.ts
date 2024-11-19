import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ServiceOptionComponent } from '../../components/service-option/service-option.component';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServiceType } from '../../components/enums/tipo-servico.enum';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-choose-service',
  standalone: true,
  imports: [HeaderComponent, ServiceOptionComponent, HttpClientModule, ReactiveFormsModule],
  templateUrl: './choose-service.component.html',
  styleUrl: './choose-service.component.scss'
})
export class ChooseServiceComponent implements OnInit {
    data: any[] = []

    ServiceType = ServiceType;
    serviceTypes = Object.values(ServiceType);

    searchForm = new FormGroup({
      inputFilteredType: new FormControl('')
    });

    constructor(private router: Router, private httpClient: HttpClient){}

    apiUrl: string = "http://localhost:8080/api"

    ngOnInit(): void {
        this.httpClient.get(`${this.apiUrl}/servicos`).subscribe(
          (response) => {
            this.data = response as any[];
          },
          (error) => {
            console.error(error.error);
          }
        )
    }

    onSearch(){
      const tipo = this.searchForm.value.inputFilteredType
      this.httpClient.get(`${this.apiUrl}/servicos?tipo=${tipo}`).subscribe(
        (response) => {
          this.data = response as any[];
        },
        (error) => {
          console.error(error.error);
        }
      )
    }

    showDetails(id: number){
      this.router.navigate(['/service-option', id]);
    }
}
