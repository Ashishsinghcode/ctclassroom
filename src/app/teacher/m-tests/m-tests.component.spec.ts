import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTestsComponent } from './m-tests.component';

describe('MTestsComponent', () => {
  let component: MTestsComponent;
  let fixture: ComponentFixture<MTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
