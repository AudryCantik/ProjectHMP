import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamserviceService {

  allteam:{ [key: string]: {name: string; image: string}[] } =
    {
      'Valorant':[
        { name: "The Princess", image: "assets/theprincess.jpg" },
        { name: "Pretty Dryx", image: "assets/prettydryx.jpg" }
      ],
      'Mobile Legend':[
        { name: "Dark Swan", image: "assets/darkswan.jpg" },
        { name: "Bullgod", image: "assets/bullgod.jpg" }
      ],
      'PUBG':[
        { name: "The Pitcher", image: "assets/thepitcher.jpg" },
        { name: "GKeyz", image: "assets/gkeyz.jpg" }
      ]
    }

  constructor() { }

  getTeam(gamename: string){
    return this.allteam[gamename] || [];
  }
}
