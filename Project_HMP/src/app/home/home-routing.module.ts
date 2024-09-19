import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },  {
    path: 'whoweare',
    loadChildren: () => import('./whoweare/whoweare.module').then( m => m.WhowearePageModule)
  },
  {
    path: 'whatweplay',
    loadChildren: () => import('./whatweplay/whatweplay.module').then( m => m.WhatweplayPageModule)
  },
  {
    path: 'ourschedule',
    loadChildren: () => import('./ourschedule/ourschedule.module').then( m => m.OurschedulePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
