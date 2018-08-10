import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../model/article.model';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  @Input() article: Article;
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){ this.submitted = true; }

 

}
