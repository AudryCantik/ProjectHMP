import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameserviceService } from '../gameservice.service';
import { TeamserviceService } from '../teamservice.service';

@Component({
  selector: 'app-joinproposal',
  templateUrl: './joinproposal.page.html',
  styleUrls: ['./joinproposal.page.scss'],
})
export class JoinproposalPage implements OnInit {

  games:any = []
  teams:any = []
  // proposals:any=[] 

  idmember=""
  selectedgame: String =""
  selectedteam: String =""
  description = ""
  gameimage=""

  constructor(private teamservice: TeamserviceService, private gameservice:GameserviceService) { }

  ngOnInit() {
    this.idmember = localStorage.getItem("app_id") ?? ""

    this.gameservice.gameList().subscribe((data: any[]) => {
      this.games = data;
  
      if (this.games.length > 0) {
        this.selectedgame = this.games[0].id; 
        this.gameimage = this.games[0].picture;
        this.filterTeams(); 
      }
    });
  }

  filterTeams(){
    for (let game of this.games) {
      if (this.selectedgame === game.name) {

        this.gameimage = game.picture

        this.teamservice.getTeam(game.idgame).subscribe((data: any[]) => {
          this.teams = data;
          console.log("Fetched teams for selected game:", data); 
        });
        break; 
      }
    }
  }

  joinProposal(){
    if (this.selectedteam) {
      for (let team of this.teams) {  
        if (this.selectedteam === team.name) {
          this.gameservice.joinProposal(parseInt(this.idmember), team.idteam, this.description).subscribe((response: any) => {            
            if (response.result === 'success') {
              alert("Success Apply Team🥳");

              this.description = "";  
              this.selectedgame = ""; 
              this.selectedteam = ""; 
              this.teams = []; 
            } else {
              alert(response.message);
            }
          });
          break;
        }
      }
    }
  }
}
