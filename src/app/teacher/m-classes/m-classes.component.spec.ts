import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MClassesComponent } from './m-classes.component';

describe('MClassesComponent', () => {
  let component: MClassesComponent;
  let fixture: ComponentFixture<MClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
