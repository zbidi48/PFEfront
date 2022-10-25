import { TestBed } from '@angular/core/testing';

import { OffreemploiecondidatService } from './offreemploiecondidat.service';

describe('OffreemploiecondidatService', () => {
  let service: OffreemploiecondidatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffreemploiecondidatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
