import { Component, OnInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { Router } from '@angular/router';
import { Page } from './page.model';
import { PagesService } from './pages.service';

@Component({
  selector: 'public-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss'],
})
export class CmsComponent {

  pages:Page[];
  selectedPage: Page;

  constructor(public pageService: PagesService){
    
  }

  ngOnInit(){
    this.pages = this.pageService.getPages();
    this.selectPage(0);
  }


  selectPage(index:number){
    
    this.selectedPage=this.pages[index];
    console.log(this.selectedPage);
  }

}
