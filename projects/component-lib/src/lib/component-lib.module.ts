import { NgModule } from '@angular/core';
import { TextInputComponent } from './components';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorKeysPipe } from './pipes/error-keys.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TextInputComponent, ErrorKeysPipe],
  imports: [MatFormFieldModule, ReactiveFormsModule, CommonModule],
  exports: [TextInputComponent, ErrorKeysPipe],
})
export class ComponentLibModule {}
