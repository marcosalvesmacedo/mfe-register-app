import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegisterAdapter } from '../adapters/register.adapter';
import { REGISTER_URLS } from '../constants/commons.constants';
import { RegisterAdaptedResponse, RegisterRequest, RegisterResponse } from '../models/register.model';
import { UserRegisterModule } from '../user-register.module';

@Injectable()
export class RegisterService {

  constructor(
    private http: HttpClient,
    private registerAdapter: RegisterAdapter
  ) { }

  public register(registerData: RegisterRequest): Observable<RegisterAdaptedResponse> {
    return this.http.post(REGISTER_URLS.SAVE_USER, registerData)
    .pipe(
      map((response) => {
        return this.registerAdapter.adaptRegister(response as RegisterResponse);
      })
    );
  }

}
