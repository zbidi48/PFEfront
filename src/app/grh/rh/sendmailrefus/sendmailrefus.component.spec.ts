import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendmailrefusComponent } from './sendmailrefus.component';

describe('SendmailrefusComponent', () => {
  let component: SendmailrefusComponent;
  let fixture: ComponentFixture<SendmailrefusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendmailrefusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendmailrefusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
