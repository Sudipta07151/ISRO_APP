import { TestBed } from '@angular/core/testing';

import { IsroserverService } from './isroserver.service';

describe('IsroserverService', () => {
  let service: IsroserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsroserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
