import { TestBed } from '@angular/core/testing';

import { RecipeslistService } from './recipeslist.service';

describe('RecipeslistService', () => {
  let service: RecipeslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
