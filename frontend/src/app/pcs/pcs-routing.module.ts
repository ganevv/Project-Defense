import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./create/create.component";
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
        ]
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PcsRoutingModule { }