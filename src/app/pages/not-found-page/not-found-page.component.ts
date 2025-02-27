import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone:true,
  selector: 'not-found-page',
  imports: [],
  templateUrl: './not-found-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotFoundPageComponent { }
