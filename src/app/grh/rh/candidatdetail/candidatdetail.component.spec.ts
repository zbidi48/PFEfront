import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatdetailComponent } from './candidatdetail.component';

describe('CandidatdetailComponent', () => {
  let component: CandidatdetailComponent;
  let fixture: ComponentFixture<CandidatdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
