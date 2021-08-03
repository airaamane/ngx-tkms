import { TestBed } from '@angular/core/testing';

import { TaxiService } from '../taxi.service';

describe('TaxiService', () => {
  let service: TaxiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
