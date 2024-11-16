import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { StatusService } from '../../components/status-service.enum';
import { PendingRequestComponent } from '../../components/pending-request/pending-request.component';

@Component({
  selector: 'app-my-requests',
  standalone: true,
  imports: [HeaderComponent, PendingRequestComponent],
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
    }
  ]

}
