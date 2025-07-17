import { FormControl, FormGroup, Validators } from "@angular/forms";

export class RegisterFormModel {

    private form: FormGroup;

    constructor() {
        this.form = new FormGroup({
            name: new FormControl('', [
                Validators.required
            ]),
            email: new FormControl('', [
                Validators.email,
                Validators.required
            ]),
        });
    }

    public builder(): FormGroup {
        return this.form;
    }

}