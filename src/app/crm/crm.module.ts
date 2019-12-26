import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrmPageRoutingModule } from './crm-routing.module';

import { CrmPage } from './crm.page';
import { AdditemPageModule } from '../additem/additem.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrmPageRoutingModule,
    AdditemPageModule
  ],
  declarations: [CrmPage]
})
export class CrmPageModule {}
