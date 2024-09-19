import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhowearePage } from './whoweare.page';

describe('WhowearePage', () => {
  let component: WhowearePage;
  let fixture: ComponentFixture<WhowearePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WhowearePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
