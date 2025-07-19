import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnakbarComponent } from '../components/snakbar/snakbar.component';
import { RegisterFormModel } from '../models/register-form.model';
import { RegisterService } from '../services/register.service';
import { RegisterAdaptedResponse } from '../models/register.model';

@Injectable()
export class RegisterFacade {

  private registerForm = new RegisterFormModel();

  constructor(
    private registerService: RegisterService,
    private matSnackBar: MatSnackBar
  ) { }

  public get form(): FormGroup {
      return this.registerForm.builder();
  }
  
  public onRegisterSubmit(): void {
    const loginFormRawValue = this.form.getRawValue();
    this.registerService
        .register(loginFormRawValue)
        .subscribe((user: RegisterAdaptedResponse) => {
          this.snakbarOpen(user.fullName);
          this.resetRegisterForm();
        })
  }

  private snakbarOpen(message: string): void {
    this.matSnackBar.openFromComponent(SnakbarComponent, {
        data: {
            message: `o usuário ${message} foi criado com sucesso!`
        },
        duration: 3000,
    });
  }

  private resetRegisterForm(): void {
    this.form.reset();

    Object.keys(this.form.controls).forEach((field) => {
      this.form.controls[field].setErrors(null);
    });
  }

}
