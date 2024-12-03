import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Ourschedule {
  date: string;
  name: string;
  team: string;
}

export interface Scheduledetails {
  img: string;
  name: string;
  place: string;
  time: string;
  team: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ScheduleserviceService {
  private baseUrl = 'https://ubaya.xyz/hybrid/160422127/Project_UAS'; 

  constructor(private http: HttpClient) {}

  getSchedule(): Observable<Ourschedule[]> {
    return this.http.get<Ourschedule[]>(`${this.baseUrl}/schedule.php`);
  }

  getScheduleDetail(name: string): Observable<Scheduledetails[]> {
    return this.http.get<Scheduledetails[]>(
      `${this.baseUrl}/schedule_detail.php?name=${encodeURIComponent(name)}`
    );
  }
}
