import { Injectable } from '@angular/core';

export interface Ourschedule{
    date: string;
    name: string;
    team: string;
}

export interface Scheduledetails{
    img: string;
    name: string;
    place: string;
    time: string;
    team: string;
    description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ScheduleserviceService {

    schedule: Ourschedule[] = [
        {
            date: "10 OKTOBER",
            name: "Regional Qualifier - Valorant",
            team: "CeTry"  
        },
        {
            date: "12 November",
            name: "Mobile Legend Workshop",
            team: "CeTry"  
        },
        {
            date: "25 November",
            name: "PUBG - Livestream",
            team: "CeTry"  
        },
    ]

    details: Scheduledetails[] = [
        {
            img: "assets/valo.jpeg",
            name: "Regional Qualifier - Valorant",
            place: "Galaxy Mall, SBY",
            time: "10.00 AM",
            team: "CeTry",
            description: "This high stakes event will bring together top teams from Surabaya to compete for a chance to advance."
        },
        {
            img: "assets/ml.png",
            name: "Mobile Legend Workshop",
            place: "Tunjungan Plaza, SBY",
            time: "13.00 PM",
            team: "CeTry",
            description: "A fast paced course for beginner competitive players. Taught by professionals and developer alike."
        },
        {
            img: "assets/livestream.jpg",
            name: "PUBG - Livestream",
            place: "At Home",
            time: "18.00 PM",
            team: "CeTry",
            description: "Share your casuals matches with your fans through a livestream."
        },
    ]


  constructor() { }

}
