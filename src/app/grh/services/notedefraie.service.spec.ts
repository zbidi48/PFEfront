import { TestBed } from '@angular/core/testing';

import { NotedefraieService } from './notedefraie.service';

describe('NotedefraieService', () => {
  let service: NotedefraieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotedefraieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
