import { TestBed } from '@angular/core/testing';

import { RegisterAdapter } from './register.adapter';

describe('RegisterAdapter', () => {
  let adapter: RegisterAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    adapter = TestBed.inject(RegisterAdapter);
  });

  it('should be created', () => {
    expect(adapter).toBeTruthy();
  });
});
