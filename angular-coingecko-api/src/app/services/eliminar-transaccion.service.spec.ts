import { TestBed } from '@angular/core/testing';

import { EliminarTransaccionService } from './eliminar-transaccion.service';

describe('EliminarTransaccionService', () => {
  let service: EliminarTransaccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliminarTransaccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
