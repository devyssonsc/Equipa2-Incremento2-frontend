import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ServiceOptionComponent } from '../../components/service-option/service-option.component';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-choose-service',
  standalone: true,
  imports: [HeaderComponent, ServiceOptionComponent, HttpClientModule],
  templateUrl: './choose-service.component.html',
  styleUrl: './choose-service.component.scss'
})
export class ChooseServiceComponent implements OnInit {
    data: any[] = []

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
      alert("Pesquisando...");
    }

    showDetails(id: number){
      this.router.navigate(['/service-option', id]);
    }
}
