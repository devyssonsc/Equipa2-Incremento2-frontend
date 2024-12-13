import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-users',
  standalone: true,
  imports: [UserCardComponent, HeaderComponent, HttpClientModule, RouterModule],
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.scss'
})
export class ManageUsersComponent implements OnInit {

  data: any;

  myId = localStorage.getItem("id");

  constructor(private httpClient: HttpClient){}

  ngOnInit(){
    this.httpClient.get("http://localhost:8080/api/utilizadores/ativos").subscribe(
      (response) => {
        console.log(response)
        this.data = response;
      },
      (error) => {
        console.error(error.error);
      }
    )
  }

}
