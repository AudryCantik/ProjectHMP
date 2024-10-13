import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberserviceService {

  allMember:{ [key: string]: {name: string; birth: string; role: string}[] } = {
    'The Princess':[
      { name: "Aurora", birth:"15 November 2001", role: "Tank" },
      { name: "Belle", birth:"4 June 1999", role: "Mage" },
      { name: "Ariel", birth:"9 June 2000", role: "Assasin" }

    ],
    'Pretty Dryx':[
      { name: "Alena", birth:"2 April 2001", role: "Duelist" },
      { name: "Axile", birth:"4 May 2000", role: "Controllers" }
    ],
    'Dark Swan':[
      { name: "Grey", birth:"18 February 2002", role: "Initiators" },
      { name: "White", birth:"5 February 2000", role: "Controllers" }
    ],
    'Bullgod':[
      { name: "Golden", birth:"30 December 1998", role: "Assasin" },
      { name: "Zeus", birth:"29 July 2000", role: "Marksman" }
    ],
    'The Pitcher':[
      { name: "Sevey", birth:"8 January 1999", role: "Sniper" },
      { name: "Takeno", birth:"17 February 2001", role: "Scout" }
    ],
    'GKeyz':[
      { name: "Ezzo", birth:"24 February 2003", role: "Assault" },
      { name: "Alfredo", birth:"18 January 2000", role: "Support" }
    ]
  }

  constructor() { }

  getMember(teamname: string){
    return this.allMember[teamname] || []
  }
}
