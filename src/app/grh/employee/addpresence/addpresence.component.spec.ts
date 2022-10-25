import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpresenceComponent } from './addpresence.component';

describe('AddpresenceComponent', () => {
  let component: AddpresenceComponent;
  let fixture: ComponentFixture<AddpresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpresenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
