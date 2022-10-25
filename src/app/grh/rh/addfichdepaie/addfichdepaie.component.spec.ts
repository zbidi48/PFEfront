import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfichdepaieComponent } from './addfichdepaie.component';

describe('AddfichdepaieComponent', () => {
  let component: AddfichdepaieComponent;
  let fixture: ComponentFixture<AddfichdepaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfichdepaieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfichdepaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
