import { Component, OnInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { Router } from '@angular/router';
import { Page } from './model/page.model';
import { PagesService } from './services/pages.service';
import { ArticleService } from './services/articles.service';
import { NewsService } from './services/news.service';
import { Article } from './model/article.model';
import { News } from './model/news.model';

@Component({
  selector: 'public-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss'],
})
export class CmsComponent {

  pages:Page[];
  selectedPage: Page;
  articles: Article[];
  selectedArticle: Article;
  news: News[];
  selectedNews: News;

  constructor(public pageService: PagesService,public articleService: ArticleService, public newsService: NewsService){
    
  }

  ngOnInit(){
    this.pages = this.pageService.getPages();
    this.articles = this.articleService.getArticles();
    this.news= this.newsService.getNews();
    this.selectPage(0);
    this.selectArticle(0);
    this.selectNews(1);
  }


  selectPage(index:number){
    this.selectedPage=this.pages[index];
  }
  selectArticle(index:number){
    this.selectedArticle=this.articles[index];
  }
  selectNews(index:number){
    this.selectedNews=this.news[index];
  }

}
