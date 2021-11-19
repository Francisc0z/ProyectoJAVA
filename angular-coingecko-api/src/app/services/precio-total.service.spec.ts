import { TestBed } from '@angular/core/testing';

import { PrecioTotalService } from './precio-total.service';

describe('PrecioTotalService', () => {
  let service: PrecioTotalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrecioTotalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
