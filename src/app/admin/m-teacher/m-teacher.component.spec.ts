import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTeacherComponent } from './m-teacher.component';

describe('MTeacherComponent', () => {
  let component: MTeacherComponent;
  let fixture: ComponentFixture<MTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
