import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleserviceService, Ourschedule } from 'src/app/scheduleservice.service';

@Component({
  selector: 'app-ourschedule',
  templateUrl: './ourschedule.page.html',
  styleUrls: ['./ourschedule.page.scss'],
})
export class OurschedulePage implements OnInit {
  schedule: Ourschedule[] = [];

  constructor(private scheduleservice: ScheduleserviceService, private router: Router) {}

  ngOnInit() {
    this.scheduleservice.getSchedule().subscribe(
      (data) => (this.schedule = data),
      (error) => console.error('Error fetching schedule:', error)
    );
  }
}
