import { TestBed } from '@angular/core/testing';

import { BrewerService } from './bewer.service';

describe('BewerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrewerService = TestBed.get(BrewerService);
    expect(service).toBeTruthy();
  });
});
