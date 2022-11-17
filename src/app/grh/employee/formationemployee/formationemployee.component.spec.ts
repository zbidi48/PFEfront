import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationemployeeComponent } from './formationemployee.component';

describe('FormationemployeeComponent', () => {
  let component: FormationemployeeComponent;
  let fixture: ComponentFixture<FormationemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
