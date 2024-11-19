import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { ChooseServiceComponent } from './pages/choose-service/choose-service.component';
import { SoPageComponent } from './pages/so-page/so-page.component';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyServicesComponent } from './pages/my-services/my-services.component';
import { CreateServiceComponent } from './pages/create-service/create-service.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';
import { RegisterAdmsComponent } from './pages/register-adms/register-adms.component';

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
    },
    {
        path: "my-requests",
        component: MyRequestsComponent
    },
    {
        path: "my-services",
        component: MyServicesComponent
    },
    {
        path: "my-profile",
        component: ProfileComponent
    },
    {
        path: "create-service",
        component: CreateServiceComponent
    },
    {
        path: "manage-users",
        component: ManageUsersComponent
    },
    {
        path: "register-adms",
        component: RegisterAdmsComponent
    }
];
