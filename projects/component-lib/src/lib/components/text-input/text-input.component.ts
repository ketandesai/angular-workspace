import { Component, Input } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { validationMessages } from '../../pipes/error-keys.pipe';
import { ErrorKeysPipe } from '../../pipes/error-keys.pipe';

@Component({
  selector: 'lib-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent {
  @Input() label!: string;
  @Input() control!: FormControl<string | null>;
  @Input() placeholder?: string;
  @Input() validationMessages: ValidationErrors = validationMessages;
}
