import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurschedulePage } from './ourschedule.page';

const routes: Routes = [
  {
    path: '',
    component: OurschedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurschedulePageRoutingModule {}
