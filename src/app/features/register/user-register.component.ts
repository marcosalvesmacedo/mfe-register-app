import { Component } from '@angular/core';
import { RegisterFacade } from './facades/register.facade';
import { REGISTER_MESSAGES } from './constants/commons.constants';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
  public labels = REGISTER_MESSAGES

  constructor(
    public registerFacade: RegisterFacade
  ) {}

}
