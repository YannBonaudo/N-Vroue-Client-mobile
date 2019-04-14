import { TestBed } from '@angular/core/testing';

import { GPSServiceService } from './gps.service';

describe('GPSServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GPSServiceService = TestBed.get(GPSServiceService);
    expect(service).toBeTruthy();
  });
});
