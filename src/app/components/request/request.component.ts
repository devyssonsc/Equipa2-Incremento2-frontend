import { Component, input, Input, OnInit } from '@angular/core';
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
export class RequestComponent {
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

  userId: string | null = localStorage.getItem("id");

  userType = localStorage.getItem("userType") ? localStorage.getItem("userType") : "";

  apiUrl: string = "http://localhost:8080/api";

  constructor(private httpClient: HttpClient, private router: Router) { }

  updateStatus(newStatus: StatusService, id: string) {
    this.httpClient.put(`${this.apiUrl}/solicitacoes/${id}`, { status: newStatus }).subscribe(
      (response) => {
        console.log(response);
        window.location.reload();
      },
      (error) => {
        console.error(error.error);
      }
    )
  }

  finalizar(id: string) {
    let inputHoras;
    do {
      inputHoras = prompt("Quantas horas demorou para realizar o serviço?");
    } while (Number.isInteger(Number(input)));

    this.httpClient.post(`${this.apiUrl}/pagamentos`, { horas: inputHoras, solicitacaoId: id }).subscribe(
      (response) => {
        console.log(response);
        this.updateStatus(StatusService.PAGAMENTO_PENDENTE, id);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  pagar(id: string) {
    let pag;

    this.httpClient.get(`${this.apiUrl}/solicitacoes/${id}`).subscribe(
      (response: any) => {
        const valor = response.pagamento.valor.toLocaleString('pt-BR', {
          minimumFractionDigits: 2, // Força 2 casas decimais
          maximumFractionDigits: 2
      });
        const ok = confirm(`Confirma o pagamento no valor de R$${valor} por ${response.pagamento.horas} horas de serviço prestado?`)
        if (ok) {
          this.updateStatus(StatusService.CONCLUIDO, response.pagamento.solicitacaoId);
        }
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
