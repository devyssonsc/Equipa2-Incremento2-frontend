import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ServiceOptionComponent } from '../../components/service-option/service-option.component';
import { Router } from '@angular/router';

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
        id: 1,
        title: "Pintura",
        description: "Pintura em casas ou apartamentos com até 100m2",
        pro: {
          name: "Divaldo Dias",
          specialty: "Pintura",
          experience: 3,
          requests: []
        },
        price: "25,00"
      },
      {
        id: 2,
        title: "Marcenaria",
        description: "Manutenção em móveis feitos de madeira",
        pro: {
          name: "Tiago Silva",
          specialty: "Marcenaria",
          experience: 1,
          requests: []
        },
        price: "13,00"
      },
      {
        id: 3,
        title: "Eletricidade",
        description: "Troca de lâmpadas e/ou tomadas",
        pro: {
          name: "Tomás David",
          specialty: "Eletricidade",
          experience: 5,
          requests: []
        },
        price: "9,49"
      }
    ]

    constructor(private router: Router){}

    onSearch(){
      alert("Pesquisando...");
    }

    showDetails(id: number){
      this.router.navigate(['/service-option', id]);
    }
}
