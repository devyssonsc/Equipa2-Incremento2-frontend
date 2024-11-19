import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-so-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HeaderComponent, HttpClientModule],
  templateUrl: './so-page.component.html',
  styleUrl: './so-page.component.scss'
})
export class SoPageComponent implements OnInit {

  idServico: string | null = null;

  data: any;

  constructor(private route: ActivatedRoute, private router: Router, private httpClient: HttpClient){}

  requirementForm = new FormGroup({
    inputDate: new FormControl('', [
      Validators.required
    ]),
    inputTime: new FormControl('', [
      Validators.required
    ])
  })

  apiUrl: string = "http://localhost:8080/api"

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.idServico = params.get('id');
    })

    this.httpClient.get(`${this.apiUrl}/servicos/${this.idServico}`).subscribe(
      (response) => {
        console.log(response)
        this.data = response as any;
      }
    )
  }

  formatDate(str: any){
    if(typeof str == "string"){
      const [year, month, day] = str.split('-');
      return `${day}-${month}-${year}`;
    }
    return '';
  }

  requireService(){
    const date = `${this.formatDate(this.requirementForm.get('inputDate')?.value)} ${this.requirementForm.get('inputTime')?.value}`;
    
    const requestData = {
      status: "PENDENTE",
      cliente: {
        id: localStorage.getItem("id")
      },
      servico: {
        id: this.idServico
      },
      data: date
    }

    this.httpClient.post(`${this.apiUrl}/solicitacoes`, requestData).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(["/my-requests"]);
      }
    )
  }
}
