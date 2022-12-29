import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MStudentComponent } from './m-student.component';

describe('MStudentComponent', () => {
  let component: MStudentComponent;
  let fixture: ComponentFixture<MStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
