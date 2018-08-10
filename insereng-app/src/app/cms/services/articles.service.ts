import { Injectable } from "@angular/core";
import { Article } from "../model/article.model";

@Injectable({
    providedIn: 'root',
})
export class ArticleService{
    public articles: Article[]=[
            new Article(0, 'Article1','/cms/articles/1', 
             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis finibus luctus. Proin pretium tellus'+
            ' ac metus posuere, vitae pretium metus elementum. Aenean sed velit id velit ultricies tempor. In egestas vestibulum justo eget malesuada.'+
            ' Quisque nec turpis ut nisl suscipit vestibulum. Nullam sit amet ultricies justo, non aliquet elit. Morbi malesuada consequat orci vitae aliquet.'+
            ' Praesent magna urna, pulvinar a rhoncus consequat, pharetra tristique turpis. Nullam mattis ac justo vel porttitor. Vestibulum maximus pellentesque est.',
             ['article1','article'],new Date()),
            new Article(1,'Article2','/cms/articles/2', 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis finibus luctus. Proin pretium tellus'+
            ' ac metus posuere, vitae pretium metus elementum. Aenean sed velit id velit ultricies tempor. In egestas vestibulum justo eget malesuada.'+
            ' Quisque nec turpis ut nisl suscipit vestibulum. Nullam sit amet ultricies justo, non aliquet elit. Morbi malesuada consequat orci vitae aliquet.'+
            ' Praesent magna urna, pulvinar a rhoncus consequat, pharetra tristique turpis. Nullam mattis ac justo vel porttitor. Vestibulum maximus pellentesque est.',
            ['article2'],new Date()),
            new Article(2,'Article3','/cms/articles/3', 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis finibus luctus. Proin pretium tellus'+
            ' ac metus posuere, vitae pretium metus elementum. Aenean sed velit id velit ultricies tempor. In egestas vestibulum justo eget malesuada.'+
            ' Quisque nec turpis ut nisl suscipit vestibulum. Nullam sit amet ultricies justo, non aliquet elit. Morbi malesuada consequat orci vitae aliquet.'+
            ' Praesent magna urna, pulvinar a rhoncus consequat, pharetra tristique turpis. Nullam mattis ac justo vel porttitor. Vestibulum maximus pellentesque est.',
            ['Article3'],new Date()),
          ];
        constructor() { }

    
    public getArticles():Article[]{
        return this.articles;
    }

}