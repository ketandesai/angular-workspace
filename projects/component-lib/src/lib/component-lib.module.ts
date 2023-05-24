import { NgModule } from '@angular/core';
import { ComponentLibComponent } from './component-lib.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorKeysPipe } from './error-keys.pipe';

@NgModule({
  declarations: [ComponentLibComponent, TextInputComponent, ErrorKeysPipe],
  imports: [MatFormFieldModule, ReactiveFormsModule],
  exports: [ComponentLibComponent],
})
export class ComponentLibModule {}
