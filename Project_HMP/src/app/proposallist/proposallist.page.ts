import { Component, OnInit } from '@angular/core';
import { GameserviceService } from '../gameservice.service';
import { defineCustomElements} from '@ionic/pwa-elements/loader';


@Component({
  selector: 'app-proposallist',
  templateUrl: './proposallist.page.html',
  styleUrls: ['./proposallist.page.scss'],
})
export class ProposallistPage implements OnInit {

  proposals:any = []
  idmember=""

  constructor(private gameservice: GameserviceService) { }

  ngOnInit() {
    this.idmember = localStorage.getItem("app_id") ?? ""

    this.gameservice.getProposal(parseInt(this.idmember)).subscribe((data) => {
      this.proposals = data
    }) 

    defineCustomElements(window)
  }

}
