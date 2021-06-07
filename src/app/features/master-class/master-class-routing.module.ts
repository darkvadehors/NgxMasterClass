import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterClassPageComponent } from './master-class-page/master-class-page.component';

const routes: Routes = [
  {path: '', component: MasterClassPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterClassRoutingModule { }
