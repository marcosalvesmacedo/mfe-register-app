import { TestBed } from '@angular/core/testing';

import { RegisterFacade } from './register.facade';

describe('RegisterFacade', () => {
  let facade: RegisterFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    facade = TestBed.inject(RegisterFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });
});
