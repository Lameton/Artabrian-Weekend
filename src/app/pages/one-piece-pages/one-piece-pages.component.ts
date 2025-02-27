import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone:true,
  selector: 'one-piece-pages',
  imports: [],
  templateUrl: './one-piece-pages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OnePiecePagesComponent { }
