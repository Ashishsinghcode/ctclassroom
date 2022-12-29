import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MClassComponent } from './m-class.component';

describe('MClassComponent', () => {
  let component: MClassComponent;
  let fixture: ComponentFixture<MClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
