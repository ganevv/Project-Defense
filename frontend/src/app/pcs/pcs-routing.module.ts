import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "../auth/profile/profile.component";
import { CreateComponent } from "./create/create.component";
import { PcDetailsComponent } from "./pc-details/pc-details.component";
import { PcListComponent } from "./pc-list/pc-list.component";

const routes: Routes = [
    {
        path: 'pcs',
        children: [
            {
                path: 'catalog',
                component: PcListComponent
            },
            {
                path: 'create',
                component: CreateComponent
            },
            {
                path: 'details/:id',
                component: PcDetailsComponent
            },
            {
              path: 'edit/:id',
            //   component: EditComponent,
            }
        ]
    },
    {
        path: 'auth',
        children: [
            {
                path: 'profile',
                component: ProfileComponent
            }
        ]
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PcsRoutingModule { }