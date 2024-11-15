import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';import { HeaderComponent } from '../../components/header/header.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { Router, RouterModule } from '@angular/router';
import { RegFormComponent } from '../../components/reg-form/reg-form.component';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [LoginFormComponent, RegFormComponent, RouterModule],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.scss'
})
export class LoginRegisterComponent implements AfterViewInit {
    @ViewChild('container') myContainer!: ElementRef;
    path?: string;

    constructor(private router: Router, private renderer: Renderer2, private cdr: ChangeDetectorRef){}

    ngAfterViewInit(): void {
        this.path = this.router.url;
        const container = this.myContainer.nativeElement;
        if(this.path == "/login"){
          this.renderer.setStyle(container, "height", "100vh");
        } else{
          this.renderer.setStyle(container, "height", "auto");
        }

        this.cdr.detectChanges();
    }
}
