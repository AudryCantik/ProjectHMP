import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProposallistPage } from './proposallist.page';

const routes: Routes = [
  {
    path: '',
    component: ProposallistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProposallistPageRoutingModule {}
