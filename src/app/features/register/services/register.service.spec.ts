import { TestBed } from '@angular/core/testing';
import { RegisterService } from './register.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RegisterAdapter } from '../adapters/register.adapter';
import { REGISTER_URLS } from '../constants/commons.constants';
import { RegisterRequest, RegisterResponse, RegisterAdaptedResponse } from '../models/register.model';

describe('RegisterService', () => {
  let service: RegisterService;
  let httpMock: HttpTestingController;
  let registerAdapterMock: jasmine.SpyObj<RegisterAdapter>;
  const registerAdapterStub = jasmine.createSpyObj('RegisterAdapter', ['adaptRegister']);

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        RegisterService,
        { provide: RegisterAdapter, useValue: registerAdapterStub }
      ]
    });

    service = TestBed.inject(RegisterService);
    httpMock = TestBed.inject(HttpTestingController);
    registerAdapterMock = TestBed.inject(RegisterAdapter) as jasmine.SpyObj<RegisterAdapter>;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call register', () => {
    const mockRequest: RegisterRequest = {
      name: 'Joao',
      email: 'joao@email.com'
    };

    const mockResponse: RegisterResponse = {
      id: 1,
      name: 'Joao',
      email: 'joao@email.com'
    };

    const mockAdapted: RegisterAdaptedResponse = {
      code: 1,
      fullName: 'Joao',
      contact: 'joao@email.com'
    };

    registerAdapterMock.adaptRegister.and.returnValue(mockAdapted);

    service.register(mockRequest).subscribe(result => {
      expect(result).toEqual(mockAdapted);
    });

    const req = httpMock.expectOne(REGISTER_URLS.SAVE_USER);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockRequest);

    req.flush(mockResponse);

    expect(registerAdapterMock.adaptRegister).toHaveBeenCalledWith(mockResponse);
  });

});
