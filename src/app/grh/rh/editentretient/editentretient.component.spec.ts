import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditentretientComponent } from './editentretient.component';

describe('EditentretientComponent', () => {
  let component: EditentretientComponent;
  let fixture: ComponentFixture<EditentretientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditentretientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditentretientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
