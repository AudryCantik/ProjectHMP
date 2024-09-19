import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatweplayPage } from './whatweplay.page';

const routes: Routes = [
  {
    path: '',
    component: WhatweplayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatweplayPageRoutingModule {}
