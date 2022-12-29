import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSubjectComponent } from './m-subject.component';

describe('MSubjectComponent', () => {
  let component: MSubjectComponent;
  let fixture: ComponentFixture<MSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
