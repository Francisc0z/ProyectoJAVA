import { TestBed } from '@angular/core/testing';

import { ServicioCarterasService } from './servicio-carteras.service';

describe('ServicioCarterasService', () => {
  let service: ServicioCarterasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCarterasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
