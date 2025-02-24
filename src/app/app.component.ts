import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterPageComponent } from "./components/footer/footer-page/footer-page.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterPageComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Artabrian-Nights';
}
