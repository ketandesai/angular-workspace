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
import {MatSelectModule} from '@angular/material/select';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'lib-text-input',
  imports: [
    ErrorKeysPipe,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    NgFor
  ],
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css'],
})
export class SelectInputComponent {
  @Input() label!: string;
  @Input() control!: FormControl<string | null>;
  @Input() messages: ValidationErrors = validationMessages;
  @Input() options!: Map<string, string>;
}
