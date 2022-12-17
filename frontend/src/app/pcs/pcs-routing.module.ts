import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { PcDetailsComponent } from "./pc-details/pc-details.component";
import { PcListComponent } from "./pc-list/pc-list.component";
import { PcUpdateComponent } from "./pc-update/pc-update.component";

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
                path: 'update/:id',
                component: PcUpdateComponent
            },
        ]
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PcsRoutingModule { }