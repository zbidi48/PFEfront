import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscritoffremploieComponent } from './inscritoffremploie.component';

describe('InscritoffremploieComponent', () => {
  let component: InscritoffremploieComponent;
  let fixture: ComponentFixture<InscritoffremploieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscritoffremploieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscritoffremploieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
