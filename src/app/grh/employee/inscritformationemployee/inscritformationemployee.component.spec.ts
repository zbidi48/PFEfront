import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscritformationemployeeComponent } from './inscritformationemployee.component';

describe('InscritformationemployeeComponent', () => {
  let component: InscritformationemployeeComponent;
  let fixture: ComponentFixture<InscritformationemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscritformationemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscritformationemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
