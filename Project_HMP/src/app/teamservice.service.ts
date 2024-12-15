import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeamserviceService {
  team = [];

  url:String = "https://ubaya.xyz/hybrid/160422127/Project_UAS/";

  getTeam(id:number):Observable<any>{
    return this.http.get<any[]>(this.url + "get_team.php?idgame="+id);
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
