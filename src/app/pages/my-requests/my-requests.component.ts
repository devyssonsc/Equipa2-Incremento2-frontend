import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { StatusService } from '../../components/status-service.enum';
import { RequestComponent } from '../../components/request/request.component';

@Component({
  selector: 'app-my-requests',
  standalone: true,
  imports: [HeaderComponent, RequestComponent],
  templateUrl: './my-requests.component.html',
  styleUrl: './my-requests.component.scss'
})
export class MyRequestsComponent {

  data = [
    {
      id: 1,
      status: StatusService.PENDENTE,
      cliente: {
        name: "Thiago Rocha",
        morada: "Rua Dr. Júlio de Matos, 431"
      },
      service: {
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
      date: {
        day: "2024-11-29",
        time: "14:30"
      }
    },
    {
      id: 2,
      status: StatusService.CANCELADO,
      cliente: {
        name: "Tomás David",
        morada: "Açoures"
      },
      service: {
        id: 7,
        title: "Marcenaria",
        description: "Manutenção em móveis feitos de madeira",
        pro: {
          name: "Tiago Silva",
          specialty: "Marcenaria",
          experience: 2,
          requests: []
        },
        price: "13,00"
      },
      date: {
        day: "2024-12-31",
        time: "23:59"
      }
    },
    {
      id: 3,
      status: StatusService.ANDAMENTO,
      cliente: {
        name: "João Mesquita",
        morada: "Ramalde"
      },
      service: {
        id: 7,
        title: "Marcenaria",
        description: "Manutenção em móveis feitos de madeira",
        pro: {
          name: "Tiago Silva",
          specialty: "Marcenaria",
          experience: 2,
          requests: []
        },
        price: "13,00"
      },
      date: {
        day: "2024-11-25",
        time: "14:30"
      }
    },
    {
      id: 4,
      status: StatusService.ACEITE,
      cliente: {
        name: "João Mesquita",
        morada: "Ramalde"
      },
      service: {
        id: 7,
        title: "Marcenaria",
        description: "Manutenção em móveis feitos de madeira",
        pro: {
          name: "Tiago Silva",
          specialty: "Marcenaria",
          experience: 2,
          requests: []
        },
        price: "13,00"
      },
      date: {
        day: "2024-11-25",
        time: "14:30"
      }
    },
    {
      id: 5,
      status: StatusService.CONCLUIDO,
      cliente: {
        name: "João Mesquita",
        morada: "Ramalde"
      },
      service: {
        id: 7,
        title: "Marcenaria",
        description: "Manutenção em móveis feitos de madeira",
        pro: {
          name: "Tiago Silva",
          specialty: "Marcenaria",
          experience: 2,
          requests: []
        },
        price: "13,00"
      },
      date: {
        day: "2024-11-25",
        time: "14:30"
      }
    }
  ]

}
