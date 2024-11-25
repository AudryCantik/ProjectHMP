import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OurschedulePage } from './ourschedule.page';

describe('OurschedulePage', () => {
  let component: OurschedulePage;
  let fixture: ComponentFixture<OurschedulePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OurschedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
