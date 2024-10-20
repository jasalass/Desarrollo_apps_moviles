import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardAutenticacionGuard } from './guard-autenticacion.guard';

describe('guardAutenticacionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardAutenticacionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
