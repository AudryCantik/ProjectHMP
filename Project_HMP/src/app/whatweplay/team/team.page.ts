import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameserviceService } from 'src/app/gameservice.service';
import { TeamserviceService } from 'src/app/teamservice.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  games:any = []
  teams: any[]=[]
  selectedgameName: string=""
  gameimage: string=""
  idgame: String = ";"
  

  constructor(private route: ActivatedRoute, private gameservice: GameserviceService, private teamservice: TeamserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.idgame = params ['idgame'];

      this.teamservice.getTeam(params['idgame']).subscribe((data:any[])=>{
        this.teams=data;

        if(data && data[0]){
          this.selectedgameName = data[0].game_name;
          this.gameimage = data [0].game_picture;
        }
        
      });
      // this.games = this.gameservice.game;

      // this.selectedgameName = params['game']
      // this.gameimage = params['gameimg']

      // this.teams = this.teamservice.getTeam(this.selectedgameName)
    });
  }

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }
  
}
