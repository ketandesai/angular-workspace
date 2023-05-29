import { NgModule } from '@angular/core';
import { TextInputComponent } from './components';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorKeysPipe } from './pipes/error-keys.pipe';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
  ],
  exports: [],
})
export class ComponentLibModule {}
