import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSemesterComponent } from './m-semester.component';

describe('MSemesterComponent', () => {
  let component: MSemesterComponent;
  let fixture: ComponentFixture<MSemesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MSemesterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
