import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ServiceOptionComponent } from '../../components/service-option/service-option.component';
import { StatusService } from '../../components/enums/status-service.enum';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-services',
  standalone: true,
  imports: [HeaderComponent, ServiceOptionComponent, HttpClientModule, RouterModule],
  templateUrl: './my-services.component.html',
  styleUrl: './my-services.component.scss'
})
export class MyServicesComponent implements OnInit {
  data: any[] = []

  apiUrl: string = "http://localhost:8080/api";

  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
    const id = localStorage.getItem("id");
    this.httpClient.get(`${this.apiUrl}/servicos/profissional/${id}`).subscribe(
      (response: any) => {
        console.log(response);
        this.data = response;
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
