import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeamserviceService {
  team = [];

  // allteam:{ [team: string]: {name: string; image: string}[] } =
  //   {
  //     'Valorant':[
  //       { name: "Dark Swan", image: "assets/darkswan.jpg" },
  //       { name: "Pretty Dryx", image: "assets/prettydryx.jpg" }
  //     ],
  //     'Mobile Legend':[
  //       { name: "The Princess", image: "assets/theprincess.jpg" },
  //       { name: "Bullgod", image: "assets/bullgod.jpg" }
  //     ],
  //     'PUBG':[
  //       { name: "The Pitcher", image: "assets/thepitcher.jpg" },
  //       { name: "GKeyz", image: "assets/gkeyz.jpg" }
  //     ]
  //   }

  url:String = "https://ubaya.xyz/hybrid/160422127/Project_UAS/";

  getTeam(id:number):Observable<any>{
    return this.http.get(this.url + "get_team.php?idgame="+id);
  }

  constructor(private http: HttpClient) { }

  // getTeam(gamename: string){
  //   if(gamename.length !=0){
  //     return this.allteam[gamename];
  //   }else{
  //     return[];
  //   }
  // }
}
