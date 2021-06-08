import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { IonicModule } from '@ionic/angular';
import { NotifyModalComponent } from './notify-modal/notify-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomePageComponent,
    NotifyModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeRoutingModule,
    IonicModule
  ]
})
export class HomeModule { }
