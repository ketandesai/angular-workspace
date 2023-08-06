import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppForm } from './app.form';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContainerLayoutComponent } from './components/container-layout/container-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, ContainerLayoutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'landing-page';
  public form!: AppForm;

  constructor(){}

  ngOnInit(): void {
    this.form = new AppForm();
  }
}
