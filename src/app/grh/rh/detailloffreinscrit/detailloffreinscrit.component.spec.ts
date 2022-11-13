import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailloffreinscritComponent } from './detailloffreinscrit.component';

describe('DetailloffreinscritComponent', () => {
  let component: DetailloffreinscritComponent;
  let fixture: ComponentFixture<DetailloffreinscritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailloffreinscritComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailloffreinscritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
