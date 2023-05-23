import { NgModule } from '@angular/core';
import { ComponentLibComponent } from './component-lib.component';
import { TextInputComponent } from './text-input/text-input.component';



@NgModule({
  declarations: [
    ComponentLibComponent,
    TextInputComponent
  ],
  imports: [
  ],
  exports: [
    ComponentLibComponent
  ]
})
export class ComponentLibModule { }
