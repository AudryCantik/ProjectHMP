import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameserviceService } from 'src/app/gameservice.service';
import { AchievementserviceService } from 'src/app/achievementservice.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {
  
  games: any[] = [];
  achievements: any[] = [];
  selectedgameName: string ="";
  gameimage: string ="";
  constructor(private route: ActivatedRoute, private gameservice: GameserviceService,private achievementservice : AchievementserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.selectedgameName = params ['game'];
      this.gameimage = params ['gameimg'];

      this.achievements = this.achievementservice.getAchievement(this.selectedgameName);
      
      this.games = this.gameservice.game;
    });
  }

}
