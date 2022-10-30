import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordvisaComponent } from './accordvisa.component';

describe('AccordvisaComponent', () => {
  let component: AccordvisaComponent;
  let fixture: ComponentFixture<AccordvisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordvisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordvisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
