import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduledetailsPageRoutingModule } from './scheduledetails-routing.module';

import { ScheduledetailsPage } from './scheduledetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduledetailsPageRoutingModule
  ],
  declarations: [ScheduledetailsPage]
})
export class ScheduledetailsPageModule {}
