import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterClassRoutingModule } from './master-class-routing.module';
import { MasterClassPageComponent } from './master-class-page/master-class-page.component';


@NgModule({
  declarations: [
    MasterClassPageComponent
  ],
  imports: [
    CommonModule,
    MasterClassRoutingModule
  ]
})
export class MasterClassModule { }
