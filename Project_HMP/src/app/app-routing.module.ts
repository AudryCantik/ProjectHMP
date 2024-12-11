import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'whatweplay',  // Mengarahkan path kosong ke halaman 'whatweplay'
    pathMatch: 'full'
  }, 

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'whatweplay', 
    loadChildren: () => import('./whatweplay/whatweplay.module').then(m => m.WhatweplayPageModule)
  },

  {
    path: 'whoweare', 
    loadChildren: () => import('./whoweare/whoweare.module').then(m => m.WhowearePageModule)
  },

  {
    path: 'ourschedule', 
    loadChildren: () => import('./ourschedule/ourschedule.module').then(m => m.OurschedulePageModule)
  },

  {
    path: 'scheduledetails/:name', // Adding the route for ScheduledetailsPage with a dynamic ID parameter
    loadChildren: () => import('./scheduledetails/scheduledetails.module').then(m => m.ScheduledetailsPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
