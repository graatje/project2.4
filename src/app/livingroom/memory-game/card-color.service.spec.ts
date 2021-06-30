import {TestBed} from '@angular/core/testing';

import {CardColorService} from './card-color.service';

describe('CardColorService', () => {
  let service: CardColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
