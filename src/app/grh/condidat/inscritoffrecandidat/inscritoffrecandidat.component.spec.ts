import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscritoffrecandidatComponent } from './inscritoffrecandidat.component';

describe('InscritoffrecandidatComponent', () => {
  let component: InscritoffrecandidatComponent;
  let fixture: ComponentFixture<InscritoffrecandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscritoffrecandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscritoffrecandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
