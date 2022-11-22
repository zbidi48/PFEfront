import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscritformationComponent } from './inscritformation.component';

describe('InscritformationComponent', () => {
  let component: InscritformationComponent;
  let fixture: ComponentFixture<InscritformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscritformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscritformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
