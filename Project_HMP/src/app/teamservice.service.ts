import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamserviceService {

  allteam:{ [team: string]: {name: string; image: string}[] } =
    {
      'Valorant':[
        { name: "Dark Swan", image: "assets/darkswan.jpg" },
        { name: "Pretty Dryx", image: "assets/prettydryx.jpg" }
      ],
      'Mobile Legend':[
        { name: "The Princess", image: "assets/theprincess.jpg" },
        { name: "Bullgod", image: "assets/bullgod.jpg" }
      ],
      'PUBG':[
        { name: "The Pitcher", image: "assets/thepitcher.jpg" },
        { name: "GKeyz", image: "assets/gkeyz.jpg" }
      ]
    }

  constructor() { }

  getTeam(gamename: string){
    if(gamename.length !=0){
      return this.allteam[gamename];
    }else{
      return[];
    }
  }
}
