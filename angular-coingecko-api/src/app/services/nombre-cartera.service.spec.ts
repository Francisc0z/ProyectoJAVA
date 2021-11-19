import { TestBed } from '@angular/core/testing';

import { NombreCarteraService } from './nombre-cartera.service';

describe('NombreCarteraService', () => {
  let service: NombreCarteraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NombreCarteraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
