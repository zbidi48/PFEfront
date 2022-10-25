import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplayoffreemploieComponent } from './applayoffreemploie.component';

describe('ApplayoffreemploieComponent', () => {
  let component: ApplayoffreemploieComponent;
  let fixture: ComponentFixture<ApplayoffreemploieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplayoffreemploieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplayoffreemploieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
