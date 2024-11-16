import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ServiceOptionComponent } from '../../components/service-option/service-option.component';

@Component({
  selector: 'app-choose-service',
  standalone: true,
  imports: [HeaderComponent, ServiceOptionComponent],
  templateUrl: './choose-service.component.html',
  styleUrl: './choose-service.component.scss'
})
export class ChooseServiceComponent {
    datas = [
      {
        title: "Pintura",
        description: "Pintura em casas ou apartamentos com até 100m2",
        pro: "Divaldo Dias",
        price: "25,00"
      },
      {
        title: "Marcenaria",
        description: "Manutenção em móveis feitos de madeira",
        pro: "Tiago",
        price: "13,00"
      },
      {
        title: "Eletricidade",
        description: "Troca de lâmpadas e/ou tomadas",
        pro: "Tomás David",
        price: "9,49"
      }
    ]

    onSearch(){
      alert("Pesquisando...");
    }
}
