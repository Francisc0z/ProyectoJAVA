import { TestBed } from '@angular/core/testing';

import { ServicioTransaccionService } from './servicio-transaccion.service';

describe('ServicioTransaccionService', () => {
  let service: ServicioTransaccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioTransaccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
