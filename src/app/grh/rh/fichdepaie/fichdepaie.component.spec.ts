import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichdepaieComponent } from './fichdepaie.component';

describe('FichdepaieComponent', () => {
  let component: FichdepaieComponent;
  let fixture: ComponentFixture<FichdepaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichdepaieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichdepaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
