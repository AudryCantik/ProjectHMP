import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProposallistPageRoutingModule } from './proposallist-routing.module';

import { ProposallistPage } from './proposallist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProposallistPageRoutingModule
  ],
  declarations: [ProposallistPage]
})
export class ProposallistPageModule {}
