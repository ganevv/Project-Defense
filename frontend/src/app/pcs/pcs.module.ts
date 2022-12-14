import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcListComponent } from './pc-list/pc-list.component';
import { PcsRoutingModule } from './pcs-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [
    PcListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    // PcsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PCsModule { }
