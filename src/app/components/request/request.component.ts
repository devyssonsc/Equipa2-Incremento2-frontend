import { Component, Input, OnInit } from '@angular/core';
import { StatusService } from '../enums/status-service.enum';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [],
  templateUrl: './request.component.html',
  styleUrl: './request.component.scss'
})
export class RequestComponent implements OnInit {
  @Input() costumer: string = "";
  @Input() description: string = "";
  @Input() title: string = "";
  @Input() date: string = "";
  @Input() price: string = "";
  @Input() status: string = "";

  ngOnInit(): void {
      console.log(this.status);
  }
}
