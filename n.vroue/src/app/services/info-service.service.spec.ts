import { TestBed } from '@angular/core/testing';

import { InfosService } from './infos.service';

describe('InfoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfosService = TestBed.get(InfosService);
    expect(service).toBeTruthy();
  });
});
