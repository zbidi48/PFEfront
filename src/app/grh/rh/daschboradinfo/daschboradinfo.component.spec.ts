import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaschboradinfoComponent } from './daschboradinfo.component';

describe('DaschboradinfoComponent', () => {
  let component: DaschboradinfoComponent;
  let fixture: ComponentFixture<DaschboradinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaschboradinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaschboradinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
