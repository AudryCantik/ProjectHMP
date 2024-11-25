import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatweplayPageRoutingModule } from './whatweplay-routing.module';

import { WhatweplayPage } from './whatweplay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatweplayPageRoutingModule
  ],
  declarations: [WhatweplayPage]
})
export class WhatweplayPageModule {}
