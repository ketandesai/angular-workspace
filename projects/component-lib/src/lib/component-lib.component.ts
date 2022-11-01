import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-component-lib',
  template: `
    <p>
      component-lib works!
    </p>
  `,
  styles: [
  ]
})
export class ComponentLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
