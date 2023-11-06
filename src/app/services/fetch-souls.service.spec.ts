import { TestBed } from '@angular/core/testing';

import { FetchSoulsService } from './fetch-souls.service';

describe('FetchSoulsService', () => {
  let service: FetchSoulsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchSoulsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
