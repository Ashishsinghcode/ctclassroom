import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MNoticeComponent } from './m-notice.component';

describe('MNoticeComponent', () => {
  let component: MNoticeComponent;
  let fixture: ComponentFixture<MNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
