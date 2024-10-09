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
  selectedyear: number = 0;

  array_year:number[] = [];

  generateNumberOptions(start: number, end: number, step: number): number[]{
    const options: number[] = [];
    for (let i = start; i <= end; i += step) {
      options.push(i);
    }
    return options;
  }

  constructor(private route: ActivatedRoute, private gameservice: GameserviceService,private achievementservice : AchievementserviceService) { }
  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.selectedgameName = params ['game'];
      this.gameimage = params ['gameimg'];

      this.achievements = this.achievementservice.getAchievement(this.selectedgameName);
    });
    this.array_year = this.generateNumberOptions(2020,2030,1);
    console.log(this.array_year);

  }

}
