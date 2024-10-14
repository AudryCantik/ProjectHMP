import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AchievementserviceService {

  allachievement:{ [key: string]: { title: string; year: number; team: string }[] } ={
    'Valorant':[
      { title: 'First Blood', year: 2023 , team: 'Dark Swan' },
      { title: 'Ace', year: 2023, team: 'Dark Swan' },
      { title: 'Spike Defused', year: 2024, team: 'Pretty Dryx' },
      { title: 'Clutch Master', year: 2022, team: 'Pretty Dryx' }
    ],
    'Mobile Legend': [
      { title: 'MVP', year: 2022 , team: 'Bullgod' },
      { title: 'Champion', year: 2023, team: 'The Princess' },
      { title: 'First Blood', year: 2024, team: 'The Princess' },
      { title: 'Epic Comeback', year: 2022, team: 'Bullgod' }
    ],
    'PUBG':[
      { title: 'Winner Winner Chicken Dinner', year: 2023 , team: 'The Pitcher' },
      { title: 'Top 10 Finish', year: 2022 , team: 'GKeyz' },
      { title: 'Survivor', year: 2025, team: 'The Pitcher' },
      { title: 'Master Sniper', year: 2023 , team: 'GKeyz' }
    ],
  };


  constructor() { }

  getAchievement(gamename:string){
    return this.allachievement[gamename] || [];
  }
}
