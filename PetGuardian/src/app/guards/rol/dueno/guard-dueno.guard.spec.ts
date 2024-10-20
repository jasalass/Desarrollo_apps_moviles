import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardDuenoGuard } from './guard-dueno.guard';

describe('guardDuenoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardDuenoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
