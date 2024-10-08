import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatweplayPage } from './whatweplay.page';

const routes: Routes = [
  {
    path: '',
    component: WhatweplayPage
  },  {
    path: 'achievement',
    loadChildren: () => import('./achievement/achievement.module').then( m => m.AchievementPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatweplayPageRoutingModule {}
