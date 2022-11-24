import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichedepaieemployeeComponent } from './fichedepaieemployee.component';

describe('FichedepaieemployeeComponent', () => {
  let component: FichedepaieemployeeComponent;
  let fixture: ComponentFixture<FichedepaieemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichedepaieemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichedepaieemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
