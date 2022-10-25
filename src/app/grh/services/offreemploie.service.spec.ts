import { TestBed } from '@angular/core/testing';

import { OffreemploieService } from './offreemploie.service';

describe('OffreemploieService', () => {
  let service: OffreemploieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffreemploieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
