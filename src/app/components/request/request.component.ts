import { Component, Input, OnInit } from '@angular/core';
import { StatusService } from '../enums/status-service.enum';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './request.component.html',
  styleUrl: './request.component.scss'
})
export class RequestComponent{
  @Input() id: string = "";
  @Input() costumer: string = "";
  @Input() description: string = "";
  @Input() type: string = "";
  @Input() pro: string = "";
  @Input() date: string = "";
  @Input() price: string = "";
  @Input() status: string = "";
  @Input() address: string = "";

  StatusService = StatusService;

  userType = localStorage.getItem("userType") ? localStorage.getItem("userType") : "";

  apiUrl: string = "http://localhost:8080/api/solicitacoes";

  constructor(private httpClient: HttpClient, private router: Router){}

  updateStatus(newStatus: StatusService, id: string){
    this.httpClient.put(`${this.apiUrl}/${id}`, {status:newStatus}).subscribe(
      (response) => {
        window.location.reload();
      },
      (error) => {
        console.error(error.error);
      }
    )
  }
}
