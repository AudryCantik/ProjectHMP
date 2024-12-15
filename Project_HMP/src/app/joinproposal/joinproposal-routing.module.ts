import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoinproposalPage } from './joinproposal.page';

const routes: Routes = [
  {
    path: '',
    component: JoinproposalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoinproposalPageRoutingModule {}
