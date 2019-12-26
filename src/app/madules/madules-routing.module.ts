import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MadulesPage } from './madules.page';

const routes: Routes = [
  {
    path: '',
    component: MadulesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MadulesPageRoutingModule {}
