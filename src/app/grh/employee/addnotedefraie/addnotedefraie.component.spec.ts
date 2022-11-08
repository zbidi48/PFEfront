import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnotedefraieComponent } from './addnotedefraie.component';

describe('AddnotedefraieComponent', () => {
  let component: AddnotedefraieComponent;
  let fixture: ComponentFixture<AddnotedefraieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnotedefraieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnotedefraieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
