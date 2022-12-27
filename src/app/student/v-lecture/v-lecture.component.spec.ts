import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VLectureComponent } from './v-lecture.component';

describe('VLectureComponent', () => {
  let component: VLectureComponent;
  let fixture: ComponentFixture<VLectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VLectureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
