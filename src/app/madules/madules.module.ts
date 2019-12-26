import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MadulesPageRoutingModule } from './madules-routing.module';

import { MadulesPage } from './madules.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MadulesPageRoutingModule
  ],
  declarations: [MadulesPage]
})
export class MadulesPageModule {}
