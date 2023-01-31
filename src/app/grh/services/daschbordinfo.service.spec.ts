import { TestBed } from '@angular/core/testing';

import { DaschbordinfoService } from './daschbordinfo.service';

describe('DaschbordinfoService', () => {
  let service: DaschbordinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaschbordinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
