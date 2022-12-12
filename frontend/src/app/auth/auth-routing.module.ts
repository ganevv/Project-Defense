import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { LogoutComponent } from './logout/logout.component'
import { RegisterComponent } from './register/register.component'


const routes: Routes = [
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: LoginComponent,
                //todo must confirm user
            },
            {
                path: 'register',
                component: RegisterComponent,
                //todo must confirm user
            },
            {
                path: 'logout',
                component: LogoutComponent,
                //todo must confirm user
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRouthingModule { }