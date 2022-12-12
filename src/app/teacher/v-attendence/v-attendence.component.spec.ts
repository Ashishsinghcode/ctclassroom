import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VAttendenceComponent } from './v-attendence.component';

describe('VAttendenceComponent', () => {
  let component: VAttendenceComponent;
  let fixture: ComponentFixture<VAttendenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VAttendenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VAttendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
