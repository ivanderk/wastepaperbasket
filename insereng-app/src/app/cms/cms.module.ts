import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsComponent } from './cms.component';
import { RenderPageComponent } from './render-page/render-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule, MatInputModule } from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import { ArticlesComponent } from './articles/articles.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { ArticleFormComponent } from './articles/article-form/article-form.component';
import { ReactiveFormsModule }          from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form/dynamic-form-question.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    MatDividerModule,
    ReactiveFormsModule
  ],
  declarations: [CmsComponent, RenderPageComponent, ArticlesComponent, NewsComponent, NewsDetailComponent, ArticleDetailComponent, ArticleFormComponent,DynamicFormComponent,DynamicFormQuestionComponent],
})
export class CmsModule { }
