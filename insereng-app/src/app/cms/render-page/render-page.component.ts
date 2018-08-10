import { Component, OnInit, Input } from '@angular/core';
import { Page } from '../model/page.model';

@Component({
  selector: 'public-render-page',
  templateUrl: './render-page.component.html',
  styleUrls: ['./render-page.component.scss'],
})
export class RenderPageComponent {

  @Input() page: Page;

}
