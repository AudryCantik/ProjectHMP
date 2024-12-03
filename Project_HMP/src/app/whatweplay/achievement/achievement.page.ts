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
  achievements: any = {} ;
  selectedgameName: string ="";
  gameimage: string ="";
  selectedyear: number = 0;
  chooseAchievement: any[] =[]
  filteredPasta: any[] = [];

  array_year:number[] = [];

  generateNumberOptions(start: number, end: number, step: number): number[]{
    const options: number[] = [];
    for (let i = start; i <= end; i += step) {
      options.push(i);
    }
    return options;
  }

  filtereAchievement(){
    this.chooseAchievement = [];

    if(this.selectedyear == 1 ){
      this.chooseAchievement = this.achievements;
    }else {
      for(let achievement of this.achievements)
        if(achievement.year === this.selectedyear){
          this.chooseAchievement.push(achievement);
        }
    }
    console.log('Filtered Achievements:', this.chooseAchievement);
  }

  constructor(private route: ActivatedRoute, private gameservice: GameserviceService,private achievementservice : AchievementserviceService) { }
  ngOnInit() {
    this.route.params.subscribe(params =>{
      const idgame = params ['idgame'];
      
      this.achievementservice.getAchievement(params['idgame']).subscribe(
        (data: any[])=> {
          this.achievements=data;

          if(data && data[0]){
            this.selectedgameName = data[0].game_name;
            this.gameimage = data [0].game_picture;
          }

          this.filtereAchievement();

          
        }
      );
    });
    this.array_year = this.generateNumberOptions(2020,2030,1); 

  }

}
