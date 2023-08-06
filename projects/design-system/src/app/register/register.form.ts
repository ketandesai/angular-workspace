import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
  } from '@angular/forms';
  
  export class RegisterForm extends FormGroup {
    readonly name = this.get('name') as FormControl;
    readonly email = this.get('email') as FormControl;

    constructor(readonly fb: FormBuilder = new FormBuilder()) {
      super(
        fb.group({
          name: ['', Validators.required],
          email: ['']
        }).controls
      );
    }
  }
  