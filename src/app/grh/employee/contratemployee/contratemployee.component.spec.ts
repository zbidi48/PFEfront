import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratemployeeComponent } from './contratemployee.component';

describe('ContratemployeeComponent', () => {
  let component: ContratemployeeComponent;
  let fixture: ComponentFixture<ContratemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
