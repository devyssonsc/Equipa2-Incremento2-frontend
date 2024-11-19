import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {

  path?: string;
  
  constructor(private router: Router, private cdr: ChangeDetectorRef){}

  ngAfterViewInit(): void {
      this.path = this.router.url;

      this.cdr.detectChanges();
  }

  goToMyProfile(){
    if(localStorage.getItem("logado") != "true"){
      this.router.navigate(["/login"]);
    } else{
      this.router.navigate(["/my-profile"]);
    }
  }
}
