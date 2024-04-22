import { TestBed } from '@angular/core/testing';

import { CountryApiService } from './api-service.service';

describe('ApiServiceService', () => {
  let service: CountryApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
