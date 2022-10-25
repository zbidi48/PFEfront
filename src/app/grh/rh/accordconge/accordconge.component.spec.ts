import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordcongeComponent } from './accordconge.component';

describe('AccordcongeComponent', () => {
  let component: AccordcongeComponent;
  let fixture: ComponentFixture<AccordcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordcongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
