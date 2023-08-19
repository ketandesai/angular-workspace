import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-container-layout',
  standalone: true,
  imports: [CommonModule, LogoComponent, NavComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

}
