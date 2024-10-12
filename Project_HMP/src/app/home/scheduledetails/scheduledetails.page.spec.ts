import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScheduledetailsPage } from './scheduledetails.page';

describe('ScheduledetailsPage', () => {
  let component: ScheduledetailsPage;
  let fixture: ComponentFixture<ScheduledetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
