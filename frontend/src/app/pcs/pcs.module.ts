import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcListComponent } from './pc-list/pc-list.component';
import { PcsRoutingModule } from './pcs-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { PcDetailsComponent } from './pc-details/pc-details.component';



@NgModule({
  declarations: [
    PcListComponent,
    CreateComponent,
    PcDetailsComponent
  ],
  imports: [
    CommonModule,
    PcsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: []
})
export class PCsModule { }
