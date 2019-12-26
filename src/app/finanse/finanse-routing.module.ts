import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinansePage } from './finanse.page';

const routes: Routes = [
  {
    path: '',
    component: FinansePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinansePageRoutingModule {}
