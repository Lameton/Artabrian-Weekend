import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroBannerComponent } from "../../components/hero-banner/hero-banner.component";

@Component({
  standalone:true,
  selector: 'home-page',
  imports: [RouterOutlet, HeroBannerComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
