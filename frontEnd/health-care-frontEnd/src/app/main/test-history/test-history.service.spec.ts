import { TestBed } from '@angular/core/testing';

import { TestHistoryService } from './test-history.service';

describe('TestHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestHistoryService = TestBed.get(TestHistoryService);
    expect(service).toBeTruthy();
  });
});
