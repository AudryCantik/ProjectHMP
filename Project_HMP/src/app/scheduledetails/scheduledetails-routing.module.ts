import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduledetailsPage } from './scheduledetails.page';

const routes: Routes = [
  {
    path: '',
    component: ScheduledetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduledetailsPageRoutingModule {}
