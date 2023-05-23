import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
  @Input() label!: string;
}
