import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddstudentdataPageRoutingModule } from './addstudentdata-routing.module';

import { AddstudentdataPage } from './addstudentdata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddstudentdataPageRoutingModule
  ],
  declarations: [AddstudentdataPage]
})
export class AddstudentdataPageModule {}
