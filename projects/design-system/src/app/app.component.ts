import { Component, OnInit } from '@angular/core';
import { AppForm } from './app.form';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { ClassificationComponent } from './components/classification/classification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LayoutComponent,
    NavComponent,
    ClassificationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'landing-page';
  public form!: AppForm;

  constructor() {}

  ngOnInit(): void {
    this.form = new AppForm();
  }
}
