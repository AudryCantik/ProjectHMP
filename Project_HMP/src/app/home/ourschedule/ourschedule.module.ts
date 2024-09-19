import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurschedulePageRoutingModule } from './ourschedule-routing.module';

import { OurschedulePage } from './ourschedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurschedulePageRoutingModule
  ],
  declarations: [OurschedulePage]
})
export class OurschedulePageModule {}
