import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotedefraieComponent } from './notedefraie.component';

describe('NotedefraieComponent', () => {
  let component: NotedefraieComponent;
  let fixture: ComponentFixture<NotedefraieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotedefraieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotedefraieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
