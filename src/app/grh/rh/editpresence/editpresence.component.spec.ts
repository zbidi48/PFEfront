import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpresenceComponent } from './editpresence.component';

describe('EditpresenceComponent', () => {
  let component: EditpresenceComponent;
  let fixture: ComponentFixture<EditpresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpresenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
