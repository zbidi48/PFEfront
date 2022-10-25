import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoffreemploieComponent } from './addoffreemploie.component';

describe('AddoffreemploieComponent', () => {
  let component: AddoffreemploieComponent;
  let fixture: ComponentFixture<AddoffreemploieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddoffreemploieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoffreemploieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
