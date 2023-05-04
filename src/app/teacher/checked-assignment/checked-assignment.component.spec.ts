import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedAssignmentComponent } from './checked-assignment.component';

describe('CheckedAssignmentComponent', () => {
  let component: CheckedAssignmentComponent;
  let fixture: ComponentFixture<CheckedAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckedAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckedAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
