import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-option',
  standalone: true,
  imports: [],
  templateUrl: './service-option.component.html',
  styleUrl: './service-option.component.scss'
})
export class ServiceOptionComponent {

  @Input() title: string = "";
  @Input() description: string = "";
  @Input() pro: string = "";
  @Input() price: string = "";

}
