import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VNotesComponent } from './v-notes.component';

describe('VNotesComponent', () => {
  let component: VNotesComponent;
  let fixture: ComponentFixture<VNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
