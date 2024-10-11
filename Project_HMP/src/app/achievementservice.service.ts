import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AchievementserviceService {

  allachievement:{ [key: string]: { title: string; year: number; team: string }[] } ={
    'Valorant':[
      { title: 'First Blood', year: 2023 , team: 'Team A' },
      { title: 'Ace', year: 2023, team: 'Team B' },
      { title: 'Spike Defused', year: 2024, team: 'Team C' },
      { title: 'Clutch Master', year: 2022, team: 'Team D' }
    ],
    'Mobile Legend': [
      { title: 'MVP', year: 2022 , team: 'Team C' },
      { title: 'Champion', year: 2023, team: 'Team D' },
      { title: 'First Blood', year: 2024, team: 'Team E' },
      { title: 'Epic Comeback', year: 2022, team: 'Team F' }
    ],
    'PUBG':[
      { title: 'Winner Winner Chicken Dinner', year: 2023 , team: 'Team E' },
      { title: 'Top 10 Finish', year: 2022 , team: 'Team F' },
      { title: 'Survivor', year: 2025, team: 'Team G' },
      { title: 'Master Sniper', year: 2023 , team: 'Team H' }
    ],
  };


  constructor() { }

  getAchievement(gamename:string){
    return this.allachievement[gamename] || [];
  }
}
