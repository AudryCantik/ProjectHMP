import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AchievementserviceService {

  achievement = [];

  // allachievement:{ [game: string]: { title: string; year: number; team: string }[] } ={
  //   'Valorant':[
  //     { title: 'First Blood', year: 2023 , team: 'Dark Swan' },
  //     { title: 'Ace', year: 2023, team: 'Dark Swan' },
  //     { title: 'Spike Defused', year: 2024, team: 'Pretty Dryx' },
  //     { title: 'Clutch Master', year: 2022, team: 'Pretty Dryx' }
  //   ],
  //   'Mobile Legend': [
  //     { title: 'MVP', year: 2022 , team: 'Bullgod' },
  //     { title: 'Champion', year: 2023, team: 'The Princess' },
  //     { title: 'First Blood', year: 2024, team: 'The Princess' },
  //     { title: 'Epic Comeback', year: 2022, team: 'Bullgod' }
  //   ],
  //   'PUBG':[
  //     { title: 'Winner Winner Chicken Dinner', year: 2023 , team: 'The Pitcher' },
  //     { title: 'Top 10 Finish', year: 2022 , team: 'GKeyz' },
  //     { title: 'Survivor', year: 2025, team: 'The Pitcher' },
  //     { title: 'Master Sniper', year: 2023 , team: 'GKeyz' }
  //   ],
  // };

  url:string = "https://ubaya.xyz/hybrid/160422127/Project_UAS/";

  getAchievement(id:number):Observable<any>{
    return this.http.get(this.url + "get_achievement.php?idgame="+ id)

  }


  constructor(private http:HttpClient) { }

  // getAchievement(gamename:string){
  //   if(gamename.length !=0){
  //     return this.allachievement[gamename]

  //   }else
  //   {
  //     return [];
  //   };
  // }
}
