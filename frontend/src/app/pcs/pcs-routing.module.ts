import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
                // component: 
            },
        ]
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PcsRoutingModule { }