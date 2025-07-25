import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RegisterAdapter } from './adapters/register.adapter';
import { RegisterFacade } from './facades/register.facade';
import { RegisterService } from './services/register.service';
import { UserRegisterRoutingModule } from './user-register-routing.module';
import { UserRegisterComponent } from './user-register.component';
@NgModule({
  declarations: [
    UserRegisterComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRegisterRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [
    RegisterAdapter,
    RegisterFacade,
    RegisterService
  ],
  bootstrap: [UserRegisterComponent]
})
export class UserRegisterModule { }
