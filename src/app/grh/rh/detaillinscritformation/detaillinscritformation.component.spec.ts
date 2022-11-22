import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillinscritformationComponent } from './detaillinscritformation.component';

describe('DetaillinscritformationComponent', () => {
  let component: DetaillinscritformationComponent;
  let fixture: ComponentFixture<DetaillinscritformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillinscritformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillinscritformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
