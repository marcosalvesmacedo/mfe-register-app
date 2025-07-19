import { TestBed } from '@angular/core/testing';

import { RegisterAdapter } from './register.adapter';
import { RegisterAdaptedResponse, RegisterResponse } from '../models/register.model';

describe('RegisterAdapter', () => {
  let adapter: RegisterAdapter;

  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [],
        providers: [
          RegisterAdapter
        ]
      });
      adapter = TestBed.inject(RegisterAdapter);
  
    });

  it('should be created', () => {
    expect(adapter).toBeTruthy();
  });
  
  it('should call adaptRegister', () => {
  
    const registerResponseMock = {
        id: 1, 
        name: 'Joao',
        email: 'joao@email.com'
    } as RegisterResponse;
    const registerAdaptedMock = {
            code: 1,
            fullName: 'Joao',
            contact: 'joao@email.com'
    } as RegisterAdaptedResponse;

    expect(adapter.adaptRegister(registerResponseMock)).toEqual(registerAdaptedMock);

  });

});
