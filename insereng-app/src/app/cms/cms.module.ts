import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsComponent } from './cms.component';
import { RenderPageComponent } from './render-page/render-page.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [CmsComponent, RenderPageComponent],
})
export class CmsModule { }
