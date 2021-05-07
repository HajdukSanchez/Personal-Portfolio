import { TestBed } from '@angular/core/testing';

import { RealTimeDbService } from './real-time-db.service';

describe('RealTimeDbService', () => {
  let service: RealTimeDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealTimeDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
