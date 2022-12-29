import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ETeacherComponent } from './e-teacher.component';

describe('ETeacherComponent', () => {
  let component: ETeacherComponent;
  let fixture: ComponentFixture<ETeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ETeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ETeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
