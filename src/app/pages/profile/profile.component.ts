import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderComponent, RouterModule, HttpClientModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements AfterViewInit {

  userType: string | null = null;
  id: string | null = null;
  user: any;

  apiUrl: string = "http://localhost:8080/api";

  constructor(private httpCliente: HttpClient, private router: Router) { }

  ngAfterViewInit(): void {
    this.id = localStorage.getItem("id");
    this.userType = localStorage.getItem("userType");

    if (this.id != null) {
      this.httpCliente.get(`${this.apiUrl}/utilizadores/${this.id}`).subscribe(
        (result) => {
          console.log(result);
          this.user = result;
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }

  logOut(){
    localStorage.setItem("logado", "false");
    localStorage.removeItem("userType");
    localStorage.removeItem("id");
    this.router.navigate(["/home"]);
  }
}
