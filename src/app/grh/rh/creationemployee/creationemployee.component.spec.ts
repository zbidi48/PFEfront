import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationemployeeComponent } from './creationemployee.component';

describe('CreationemployeeComponent', () => {
  let component: CreationemployeeComponent;
  let fixture: ComponentFixture<CreationemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
