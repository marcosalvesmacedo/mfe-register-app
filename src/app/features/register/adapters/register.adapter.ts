import { Injectable } from "@angular/core";
import { RegisterAdaptedResponse, RegisterResponse } from "../models/register.model";
import { UserRegisterModule } from "../user-register.module";

@Injectable()
export class RegisterAdapter {

    public adaptRegister(register: RegisterResponse): RegisterAdaptedResponse {
        return {
            code: register.id,
            fullName: register.name,
            contact: register.email
        };
    }

}
