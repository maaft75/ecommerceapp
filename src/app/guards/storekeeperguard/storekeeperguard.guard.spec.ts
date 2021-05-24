import { TestBed } from '@angular/core/testing';

import { StorekeeperguardGuard } from './storekeeperguard.guard';

describe('StorekeeperguardGuard', () => {
  let guard: StorekeeperguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StorekeeperguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
