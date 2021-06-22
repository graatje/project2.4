import { TestBed } from '@angular/core/testing';

import { ForumThreadService } from './forum-thread.service';

describe('ForumThreadService', () => {
  let service: ForumThreadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumThreadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
