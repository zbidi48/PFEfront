import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoffreemploieComponent } from './editoffreemploie.component';

describe('EditoffreemploieComponent', () => {
  let component: EditoffreemploieComponent;
  let fixture: ComponentFixture<EditoffreemploieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditoffreemploieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoffreemploieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
