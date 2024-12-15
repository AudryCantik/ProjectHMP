import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoinproposalPageRoutingModule } from './joinproposal-routing.module';

import { JoinproposalPage } from './joinproposal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoinproposalPageRoutingModule
  ],
  declarations: [JoinproposalPage]
})
export class JoinproposalPageModule {}
