import {Component, input, signal} from '@angular/core';
import {LinkModel} from './models/link.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'nav-bar',
  imports: [
    RouterLink
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  links = input.required<LinkModel[]>(); // .required pour obligé l'initialisation de la variable
}
