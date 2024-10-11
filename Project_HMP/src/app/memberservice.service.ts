import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberserviceService {

  allMember:{ [key: string]: {name: string; birth: string}[] } = {
    'The Princess':[
      { name: "Aurora", birth:"" },
      { name: "Belle", birth:" " }
    ],
    'Pretty Dryx':[
      { name: "Alena", birth:"" },
      { name: "Axile", birth:" " }
    ],
    'Dark Swan':[
      { name: "Grey", birth:"" },
      { name: "White", birth:" " }
    ],
    'Bullgod':[
      { name: "Golden", birth:"" },
      { name: "Zeus", birth:" " }
    ],
    'The Pitcher':[
      { name: "Sevey", birth:"" },
      { name: "Takeno", birth:" " }
    ],
    'GKeyz':[
      { name: "Ezzo", birth:"" },
      { name: "Alfredo", birth:" " }
    ]
  }

  constructor() { }

  getMember(teamname: string){
    return this.allMember[teamname] || []
  }
}
