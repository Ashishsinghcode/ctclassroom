import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispNoticeComponent } from './disp-notice.component';

describe('DispNoticeComponent', () => {
  let component: DispNoticeComponent;
  let fixture: ComponentFixture<DispNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
