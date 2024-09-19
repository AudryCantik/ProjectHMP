import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhatweplayPage } from './whatweplay.page';

describe('WhatweplayPage', () => {
  let component: WhatweplayPage;
  let fixture: ComponentFixture<WhatweplayPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatweplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
