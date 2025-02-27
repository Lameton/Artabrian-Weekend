import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterPageComponent } from "./components/footer/footer-page/footer-page.component";
import { CountdownComponent } from './shared/countdown/countdown.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterPageComponent, CountdownComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Artabrian-Weekend-2025';
}
