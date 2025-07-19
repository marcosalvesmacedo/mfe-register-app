import { TestBed } from '@angular/core/testing';
import { RegisterFacade } from './register.facade';
import { RegisterService } from '../services/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnakbarComponent } from '../components/snakbar/snakbar.component';
import { of } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { RegisterAdaptedResponse } from '../models/register.model';

describe('RegisterFacade', () => {
  let facade: RegisterFacade;
  let registerServiceSpy: jasmine.SpyObj<RegisterService>;
  let matSnackBarSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(() => {
    const registerServiceStub = jasmine.createSpyObj('RegisterService', ['register']);
    const matSnakBarStub = jasmine.createSpyObj('MatSnackBar', ['openFromComponent']);

    TestBed.configureTestingModule({
      providers: [
        RegisterFacade,
        { provide: RegisterService, useValue: registerServiceStub },
        { provide: MatSnackBar, useValue: matSnakBarStub }
      ]
    });

    facade = TestBed.inject(RegisterFacade);
    registerServiceSpy = TestBed.inject(RegisterService) as jasmine.SpyObj<RegisterService>;
    matSnackBarSpy = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;

  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should call register', () => {
    const mockForm: FormGroup = facade.form;
    const mockRawValue = {
      name: 'Joao',
      email: 'joao@email.com',
    };

    const mockResponse: RegisterAdaptedResponse = {
      code: 1,
      fullName: 'Joao',
      contact: 'joao@email.com'
    };

    spyOn(mockForm, 'getRawValue').and.returnValue(mockRawValue);
    spyOn(mockForm, 'reset');

    registerServiceSpy.register.and.returnValue(of(mockResponse));

    facade.onRegisterSubmit();

    expect(registerServiceSpy.register).toHaveBeenCalledWith(mockRawValue);
    expect(matSnackBarSpy.openFromComponent).toHaveBeenCalledWith(SnakbarComponent, {
      data: { message: 'o usuário Joao foi criado com sucesso!' },
      duration: 3000
    });
    expect(mockForm.reset).toHaveBeenCalled();
  });

});
