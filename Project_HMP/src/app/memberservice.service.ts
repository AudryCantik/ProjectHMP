import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberserviceService {

  allmember = [];

  // allMember:{ [key: string]: {name: string; birth: string; role: string, avatar: string}[] } = {
  //   'The Princess':[
  //     { name: "Aurora", birth:"15 November 2001", role: "Tank", avatar: "avatar11.jpeg" },
  //     { name: "Belle", birth:"4 June 1999", role: "Mage", avatar: "avatar12.jpeg" },
  //     { name: "Ariel", birth:"9 June 2000", role: "Assasin", avatar: "avatar13.jpeg" }

  //   ],
  //   'Pretty Dryx':[
  //     { name: "Alena", birth:"2 April 2001", role: "Duelist", avatar: "avatar1.jpeg" },
  //     { name: "Axile", birth:"4 May 2000", role: "Controllers", avatar: "avatar2.jpeg" }
  //   ],
  //   'Dark Swan':[
  //     { name: "Grey", birth:"18 February 2002", role: "Initiators", avatar: "avatar3.jpeg" },
  //     { name: "White", birth:"5 February 2000", role: "Controllers", avatar: "avatar4.jpeg" }
  //   ],
  //   'Bullgod':[
  //     { name: "Golden", birth:"30 December 1998", role: "Assasin", avatar: "avatar5.jpeg" },
  //     { name: "Zeus", birth:"29 July 2000", role: "Marksman", avatar: "avatar6.jpeg" }
  //   ],
  //   'The Pitcher':[
  //     { name: "Sevey", birth:"8 January 1999", role: "Sniper", avatar: "avatar7.jpeg" },
  //     { name: "Takeno", birth:"17 February 2001", role: "Scout", avatar: "avatar8.jpeg" }
  //   ],
  //   'GKeyz':[
  //     { name: "Ezzo", birth:"24 February 2003", role: "Assault", avatar: "avatar9.jpeg" },
  //     { name: "Alfredo", birth:"18 January 2000", role: "Support", avatar: "avatar10.jpeg" }
  //   ]
  // }

  url:String = "https://ubaya.xyz/hybrid/160422127/Project_UAS/"

  getteamMeber(id:number):Observable<any>{
    return this.http.get(this.url + "get_teamember.php?idteam="+id);
  }
  constructor(private http: HttpClient) { }

  // getMember(teamname: string){
  //   return this.allMember[teamname] || []
  // }
}
