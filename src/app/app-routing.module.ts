import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'masterclass',
    children: [
      {
        path: '',
        loadChildren: () => import('./features/master-class/master-class-routing.module')
          .then(m => m.MasterClassRoutingModule)
      },
      {
        path: ':name',
        loadChildren: () => import('./features/detail/detail.module')
          .then(m => m.DetailModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
