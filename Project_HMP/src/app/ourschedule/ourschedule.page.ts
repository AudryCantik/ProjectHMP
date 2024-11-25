import { Component, OnInit } from '@angular/core';
import { ScheduleserviceService, Ourschedule } from 'src/app/scheduleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ourschedule',
  templateUrl: './ourschedule.page.html',
  styleUrls: ['./ourschedule.page.scss'],
})
export class OurschedulePage implements OnInit {

  schedule: Ourschedule[] = [];

  constructor(private scheduleservice: ScheduleserviceService, private router: Router) { }

  ngOnInit() {
    // Fetching events from the schedule service
    this.schedule = this.scheduleservice.schedule;
  }

}
