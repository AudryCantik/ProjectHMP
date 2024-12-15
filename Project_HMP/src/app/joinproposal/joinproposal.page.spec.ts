import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JoinproposalPage } from './joinproposal.page';

describe('JoinproposalPage', () => {
  let component: JoinproposalPage;
  let fixture: ComponentFixture<JoinproposalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinproposalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
