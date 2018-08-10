import { Injectable } from "@angular/core";
import { News } from "../model/news.model";

@Injectable({
    providedIn: 'root',
})
export class NewsService{
    public news: News[]=[
            new News(0, 'Today News','/cms/news/1', 
             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis finibus luctus. Proin pretium tellus'+
            ' ac metus posuere, vitae pretium metus elementum. Aenean sed velit id velit ultricies tempor. In egestas vestibulum justo eget malesuada.'+
            ' Quisque nec turpis ut nisl suscipit vestibulum. Nullam sit amet ultricies justo, non aliquet elit. Morbi malesuada consequat orci vitae aliquet.'+
            ' Praesent magna urna, pulvinar a rhoncus consequat, pharetra tristique turpis. Nullam mattis ac justo vel porttitor. Vestibulum maximus pellentesque est.',
             ['today','news'],new Date(), 'Oscar Bax'),
            new News(1,'News2','/cms/news/2', 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis finibus luctus. Proin pretium tellus'+
            ' ac metus posuere, vitae pretium metus elementum. Aenean sed velit id velit ultricies tempor. In egestas vestibulum justo eget malesuada.'+
            ' Quisque nec turpis ut nisl suscipit vestibulum. Nullam sit amet ultricies justo, non aliquet elit. Morbi malesuada consequat orci vitae aliquet.'+
            ' Praesent magna urna, pulvinar a rhoncus consequat, pharetra tristique turpis. Nullam mattis ac justo vel porttitor. Vestibulum maximus pellentesque est.',
            ['News'],new Date(),'Victoria Luis'),
            new News(2,'News3','/cms/news/3', 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis finibus luctus. Proin pretium tellus'+
            ' ac metus posuere, vitae pretium metus elementum. Aenean sed velit id velit ultricies tempor. In egestas vestibulum justo eget malesuada.'+
            ' Quisque nec turpis ut nisl suscipit vestibulum. Nullam sit amet ultricies justo, non aliquet elit. Morbi malesuada consequat orci vitae aliquet.'+
            ' Praesent magna urna, pulvinar a rhoncus consequat, pharetra tristique turpis. Nullam mattis ac justo vel porttitor. Vestibulum maximus pellentesque est.',
            ['News'],new Date(),'Johanna'),
          ];
        constructor() { }

    
    public getNews():News[]{
        return this.news;
    }

}