import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',  // Mengarahkan path kosong ke halaman 'home'
    pathMatch: 'full'
  }, 

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'scheduledetails/:name', // Adding the route for ScheduledetailsPage with a dynamic ID parameter
    loadChildren: () => import('./home/scheduledetails/scheduledetails.module').then(m => m.ScheduledetailsPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
