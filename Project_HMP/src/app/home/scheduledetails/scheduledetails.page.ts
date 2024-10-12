import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ScheduleserviceService, Scheduledetails } from 'src/app/scheduleservice.service';

@Component({
  selector: 'app-scheduledetails',
  templateUrl: './scheduledetails.page.html',
  styleUrls: ['./scheduledetails.page.scss'],
})
export class ScheduledetailsPage implements OnInit {
  
  selectedEvent: Scheduledetails | undefined; // Use this property to hold the event details
  
  constructor(
    private scheduleService: ScheduleserviceService,
    private route: ActivatedRoute,        
    private alertCtrl: AlertController    
  ) { }

  ngOnInit() {
    const eventName = this.route.snapshot.paramMap.get('name'); // Assuming you're passing 'name' in the route
    this.selectedEvent = this.scheduleService.details.find(event => event.name === eventName); // Find the event in the details array
  }

  async notifyMe() {
    const alert = await this.alertCtrl.create({
      header: 'Notification',
      message: 'Notification created.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
