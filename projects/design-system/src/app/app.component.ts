import { Component, OnInit } from '@angular/core';
import { AppForm } from './app.form';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, LayoutComponent],
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
