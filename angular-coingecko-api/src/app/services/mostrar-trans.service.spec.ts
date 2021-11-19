import { TestBed } from '@angular/core/testing';

import { MostrarTransService } from './mostrar-trans.service';

describe('MostrarTransService', () => {
  let service: MostrarTransService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostrarTransService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
