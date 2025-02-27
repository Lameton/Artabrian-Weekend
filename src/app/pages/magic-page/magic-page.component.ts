import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone:true,
  selector: 'magic-page',
  imports: [],
  templateUrl: './magic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MagicPageComponent { }
