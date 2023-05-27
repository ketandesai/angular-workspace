import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

export class AppForm extends FormGroup {
  readonly name = this.get('name') as FormControl;
  
  constructor(readonly fb: FormBuilder = new FormBuilder()) {
    super(
      fb.group({
        name: ['test name', Validators.required],
      }).controls
    );
  }
}
