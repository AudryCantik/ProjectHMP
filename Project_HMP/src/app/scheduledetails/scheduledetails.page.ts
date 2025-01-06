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
  selectedEvent: Scheduledetails | undefined;
  isNotificationActive = false; // Track notification state

  constructor(
    private scheduleService: ScheduleserviceService,
    private route: ActivatedRoute,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    const eventName = this.route.snapshot.paramMap.get('name');
    if (eventName) {
      this.scheduleService.getScheduleDetail(eventName).subscribe(
        (data) => {
          this.selectedEvent = data[0]; // Assuming API returns an array.
        },
        (error) => console.error('Error fetching schedule detail:', error)
      );
    }
  }

  async toggleNotification() {
    if (this.isNotificationActive) {
      const alert = await this.alertCtrl.create({
        header: 'Notification',
        message: 'Notification deactivated.',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Notification',
        message: 'Notification activated.',
        buttons: ['OK'],
      });
      await alert.present();
    }
    this.isNotificationActive = !this.isNotificationActive; // Toggle state
  }
}
