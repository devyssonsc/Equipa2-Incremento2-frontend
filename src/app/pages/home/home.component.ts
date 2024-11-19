import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  path?: string;

  constructor(private router: Router){}

  start(){
    const logged = localStorage.getItem("logado") == "true" ? true : false;
    if(logged){
      this.router.navigate(["/my-requests"]);
    } else{
      this.router.navigate(["/login"]);
    }
  }
}
