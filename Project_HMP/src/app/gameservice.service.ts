import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameserviceService {

  // game =[
  //   {
  //     name: "Valorant",
  //     image: "assets/valo.jpg",
  //     description: "Valorant is a tactical first-person shooter developed by Riot Games. It combines precise gunplay with a unique set of character abilities, where each agent has special skills that impact gameplay. Players engage in fast-paced, strategic, team-based matches, working together to complete objectives or eliminate the enemy. "
  //   },
  //   {
  //     name: "Mobile Legend",
  //     image: "assets/mobilelegend.jpeg",
  //     description: "Mobile Legends: Bang Bang is a multiplayer online battle arena (MOBA) game designed for mobile devices. It features fast-paced 5v5 team battles where players choose from a variety of heroes, each with unique abilities, to battle for control of the map. The goal is to destroy the enemy's base while defending your own. With a large roster of heroes and short match times, Mobile Legends is popular among gamers seeking competitive, quick, and action-packed matches."
  //   },
  //   {
  //     name: "PUBG",
  //     image: "assets/pubg.jpg",
  //     description: "PUBG is a battle royale game developed by PUBG Corporation, a subsidiary of Bluehole. In PUBG, up to 100 players parachute onto an island, scavenging for weapons, armor, and equipment to be the last person or team standing. The game’s map shrinks over time, forcing players into closer encounters. With its realistic graphics, tense survival gameplay, and multiple game modes, PUBG has become one of the most popular battle royale games globally."
  //   }
  // ]

  game = []
  url: string = "https://ubaya.xyz/hybrid/160422127/Project_UAS/"
  constructor(private http: HttpClient) { }

  gameList(): Observable<any>{
    return this.http.get(this.url + "get_game.php")
  }
}
