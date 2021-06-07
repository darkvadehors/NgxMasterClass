import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    DetailPageComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    IonicModule
  ]
})
export class DetailModule { }
