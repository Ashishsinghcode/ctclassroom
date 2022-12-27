import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VAssignmentComponent } from './v-assignment.component';

describe('VAssignmentComponent', () => {
  let component: VAssignmentComponent;
  let fixture: ComponentFixture<VAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
