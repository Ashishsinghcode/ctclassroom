import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAssignmentsComponent } from './m-assignments.component';

describe('MAssignmentsComponent', () => {
  let component: MAssignmentsComponent;
  let fixture: ComponentFixture<MAssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MAssignmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
