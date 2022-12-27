import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VTestComponent } from './v-test.component';

describe('VTestComponent', () => {
  let component: VTestComponent;
  let fixture: ComponentFixture<VTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
