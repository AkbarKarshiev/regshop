import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'server-error',
    loadChildren: () => import('@regshop/errors/server-error/page').then((modules) => modules.ServerErrorPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('@regshop/errors/not-found/page').then((modules) => modules.NotFoundPageModule)
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsPagesRoutingModule { }
