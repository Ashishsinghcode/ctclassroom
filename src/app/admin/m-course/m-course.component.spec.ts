import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCourseComponent } from './m-course.component';

describe('MCourseComponent', () => {
  let component: MCourseComponent;
  let fixture: ComponentFixture<MCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
