import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameserviceService } from 'src/app/gameservice.service';
import { MemberserviceService } from 'src/app/memberservice.service';
import { TeamserviceService } from 'src/app/teamservice.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {
  members:any=[]
  selectedTeamName: string=""
  gameimage: string=""

  constructor(private route: ActivatedRoute, private gameservice: GameserviceService, private teamservice: TeamserviceService, private memberservice: MemberserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{

      this.gameimage = params['gameimg']
      this.selectedTeamName = params['team']

      this.members = this.memberservice.getMember(this.selectedTeamName)

    })
  }

}
