import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { validationMessages } from '../../pipes/error-keys.pipe';
import { ErrorKeysPipe } from '../../pipes/error-keys.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'lib-text-input',
  imports: [
    ErrorKeysPipe,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    NgFor
  ],
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent {
  @Input() label!: string;
  @Input() control!: FormControl<string | null>;
  @Input() placeholder?: string;
  @Input() messages: ValidationErrors = validationMessages;
}
