import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDepartmentComponent } from './m-department.component';

describe('MDepartmentComponent', () => {
  let component: MDepartmentComponent;
  let fixture: ComponentFixture<MDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
