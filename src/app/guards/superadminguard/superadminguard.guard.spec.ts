import { TestBed } from '@angular/core/testing';

import { SuperadminguardGuard } from './superadminguard.guard';

describe('SuperadminguardGuard', () => {
  let guard: SuperadminguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SuperadminguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
