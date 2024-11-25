import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationController } from '@ionic/angular';
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

  constructor(private route: ActivatedRoute,private animationCtrl: AnimationController, private teamservice: TeamserviceService, private memberservice: MemberserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{

      this.gameimage = params['gameimg']
      this.selectedTeamName = params['team']

      this.members = this.memberservice.getMember(this.selectedTeamName)

    })
  }

  rotateAvatar() {
    const avatarElements = document.querySelectorAll('.myAvatar') as NodeListOf<HTMLElement>;
    avatarElements.forEach((avatarElement) => {
     const animation = this.animationCtrl
         .create()
         .addElement(avatarElement)
         .duration(5000) 
         .iterations(5) 
         .keyframes([
             { offset: 0, transform: 'rotate(0deg)' }, 
             { offset: 1, transform: 'rotate(360deg)' }, 
         ]);
     animation.play();
    })
  }

  ionViewDidEnter(){
    this.rotateAvatar()
  }

}
