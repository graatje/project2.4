import {TestBed} from '@angular/core/testing';

import {TimingService} from './timing.service';

describe('TimingService', () => {
  let service: TimingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
