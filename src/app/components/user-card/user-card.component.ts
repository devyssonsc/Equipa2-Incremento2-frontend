import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() id: string = "";
  @Input() name: string = "";
  @Input() email: string = "";
  @Input() address: string = "";
  @Input() userType: string = "";

  constructor(private httpClient: HttpClient) { }

  deleteUser(id: string, email: string) {
    const ok = confirm(`Tem certeza que deseja excluir o utilizador: ${email}?`);
    if (ok) {
      this.httpClient.delete(`http://localhost:8080/api/utilizadores/${id}`).subscribe(
        response => {
          window.location.reload();
        },
        error => {
          console.error(error.error);
        }
      )
    }
  }
}
