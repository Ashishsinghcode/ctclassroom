import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MVideosComponent } from './m-videos.component';

describe('MVideosComponent', () => {
  let component: MVideosComponent;
  let fixture: ComponentFixture<MVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
