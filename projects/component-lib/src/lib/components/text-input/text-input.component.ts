import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { validationMessages } from '../../pipes/error-keys.pipe';
@Component({
  selector: 'lib-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent {
  @Input() label!: string;
  @Input() control!: FormControl;
  @Input() placeholder?: string;
  @Input() validationMessages? = validationMessages;
}
