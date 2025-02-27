import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone:true,
  selector: 'star-wars-page',
  imports: [],
  templateUrl: './star-wars-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StarWarsPageComponent { }
