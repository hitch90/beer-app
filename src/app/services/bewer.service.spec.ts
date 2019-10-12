import { TestBed } from '@angular/core/testing';

import { BewerService } from './bewer.service';

describe('BewerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BewerService = TestBed.get(BewerService);
    expect(service).toBeTruthy();
  });
});
