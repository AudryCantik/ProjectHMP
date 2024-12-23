import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamPage } from './team.page';

const routes: Routes = [
  {
    path: '',
    component: TeamPage
  },
  {
    path: 'member/:idteam',
    loadChildren: () => import('./member/member.module').then( m => m.MemberPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamPageRoutingModule {}
