import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

export const validationMessages: ValidationErrors = {
  required: 'Required',
  minlength: 'Too Short',
  maxlength: 'Too Long',
  pattern: 'Forbidden Entry',
  email: 'Invalid Entry',
  date: 'Invalid Date',
};

@Pipe({
  name: 'errorKeys',
  standalone: true,
})
export class ErrorKeysPipe implements PipeTransform {
  transform(errors: ValidationErrors): string[] {
    if (!errors) {
      return [];
    }
    return Object.keys(errors);
  }
}
