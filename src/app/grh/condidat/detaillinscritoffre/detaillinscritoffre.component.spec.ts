import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillinscritoffreComponent } from './detaillinscritoffre.component';

describe('DetaillinscritoffreComponent', () => {
  let component: DetaillinscritoffreComponent;
  let fixture: ComponentFixture<DetaillinscritoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillinscritoffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillinscritoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
