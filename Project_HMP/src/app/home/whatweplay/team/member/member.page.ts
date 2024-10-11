import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberserviceService } from 'src/app/memberservice.service';
import { TeamserviceService } from 'src/app/teamservice.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {

  teams:any = []
  members:any=[]
  selectedTeamName: string=""

  constructor(private route: ActivatedRoute, private teamservice: TeamserviceService, private memberservice: MemberserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.selectedTeamName = params['team']
      this.members = this.teamservice.getTeam(this.selectedTeamName)
    })
  }

}
