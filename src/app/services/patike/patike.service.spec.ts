import { TestBed } from '@angular/core/testing';

import { PatikeService } from './patike.service';

describe('PatikeService', () => {
  let service: PatikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
