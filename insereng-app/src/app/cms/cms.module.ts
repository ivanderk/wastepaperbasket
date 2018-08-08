import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsComponent } from './cms.component';
import { RenderPageComponent } from './render-page/render-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    MatDividerModule,
  ],
  declarations: [CmsComponent, RenderPageComponent],
})
export class CmsModule { }
