import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MNotesComponent } from './m-notes.component';

describe('MNotesComponent', () => {
  let component: MNotesComponent;
  let fixture: ComponentFixture<MNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
