import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { ChooseServiceComponent } from './pages/choose-service/choose-service.component';
import { SoPageComponent } from './pages/so-page/so-page.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "login",
        component: LoginRegisterComponent
    },
    {
        path: "register",
        component: LoginRegisterComponent
    },
    {
        path: "choose-service",
        component: ChooseServiceComponent
    },
    {
        path: "service-option/:id",
        component: SoPageComponent
    }
];
