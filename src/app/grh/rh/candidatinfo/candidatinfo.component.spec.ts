import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatinfoComponent } from './candidatinfo.component';

describe('CandidatinfoComponent', () => {
  let component: CandidatinfoComponent;
  let fixture: ComponentFixture<CandidatinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
