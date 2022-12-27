import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VVideoComponent } from './v-video.component';

describe('VVideoComponent', () => {
  let component: VVideoComponent;
  let fixture: ComponentFixture<VVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
