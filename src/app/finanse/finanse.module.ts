import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinansePageRoutingModule } from './finanse-routing.module';

import { FinansePage } from './finanse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinansePageRoutingModule
  ],
  declarations: [FinansePage]
})
export class FinansePageModule {}
