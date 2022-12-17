import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HasUser } from '../shared/guards/hasUser'
import { isGuest } from '../shared/guards/isGuest'
import { LoginComponent } from './login/login.component'
import { LogoutComponent } from './logout/logout.component'
import { ProfileComponent } from './profile/profile.component'
import { RegisterComponent } from './register/register.component'


const routes: Routes = [
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: LoginComponent,
                canActivate:[isGuest]
            },
            {
                path: 'register',
                component: RegisterComponent,
                canActivate:[isGuest]
            },
            {
                path: 'logout',
                component: LogoutComponent,
                canActivate:[HasUser]
            },
            {
                path: 'profile',
                component: ProfileComponent,
                canActivate:[HasUser]
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRouthingModule { }