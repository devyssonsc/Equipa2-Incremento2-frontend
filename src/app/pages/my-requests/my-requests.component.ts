import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { StatusService } from '../../components/enums/status-service.enum';
import { RequestComponent } from '../../components/request/request.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-my-requests',
  standalone: true,
  imports: [HeaderComponent, RequestComponent, HttpClientModule],
  templateUrl: './my-requests.component.html',
  styleUrl: './my-requests.component.scss'
})
export class MyRequestsComponent implements OnInit {

  data: any[] = [];

  constructor(private httpClient: HttpClient){}

  apiUrl: string = "http://localhost:8080/api/solicitacoes"

  ngOnInit(): void {
      this.httpClient.get(this.apiUrl).subscribe(
        (response: any) => {
          console.log(response);
          this.data = response
        },
        (error) => {
          console.error(error.error);
        }
      )
  }

}
