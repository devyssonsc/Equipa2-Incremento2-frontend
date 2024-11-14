import { Component, OnInit } from '@angular/core';import { HeaderComponent } from '../../components/header/header.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { Router } from '@angular/router';
import { RegFormComponent } from '../../components/reg-form/reg-form.component';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [LoginFormComponent, RegFormComponent],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.scss'
})
export class LoginRegisterComponent implements OnInit {
    path?: string;

    constructor(private router: Router){}

    ngOnInit(): void {
        this.path = this.router.url;
    }
}
