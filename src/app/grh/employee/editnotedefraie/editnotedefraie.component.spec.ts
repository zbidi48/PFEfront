import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnotedefraieComponent } from './editnotedefraie.component';

describe('EditnotedefraieComponent', () => {
  let component: EditnotedefraieComponent;
  let fixture: ComponentFixture<EditnotedefraieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditnotedefraieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditnotedefraieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
