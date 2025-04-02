import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavBarComponent} from './shared/components/layout/nav-bar/nav-bar.component';
import {LinkModel} from './shared/components/layout/nav-bar/models/link.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HappyLibrary';

  homeLinks: LinkModel[] = [
    {
      url: "/",
      name: "Home"
    }, {
      url: "/about",
      name: "A propos"
    }];
}
