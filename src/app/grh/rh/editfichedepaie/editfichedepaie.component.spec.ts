import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfichedepaieComponent } from './editfichedepaie.component';

describe('EditfichedepaieComponent', () => {
  let component: EditfichedepaieComponent;
  let fixture: ComponentFixture<EditfichedepaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfichedepaieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfichedepaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
