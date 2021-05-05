import { TestBed } from '@angular/core/testing';

import { RealTimeFireService } from './real-time-fire.service';

describe('RealTimeFireService', () => {
  let service: RealTimeFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealTimeFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
