import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppForm } from './app.form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'design-system2';
  public form!: AppForm;

  constructor(){}

  ngOnInit(): void {
    this.form = new AppForm();
  }
}
