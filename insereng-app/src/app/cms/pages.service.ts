import { Injectable } from "@angular/core";
import { Page } from "./page.model";

@Injectable({
    providedIn: 'root',
})
export class PagesService{
    public pages: Page[]=[
            new Page( 'Dashboard','/home', 
             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis finibus luctus. Proin pretium tellus'+
            ' ac metus posuere, vitae pretium metus elementum. Aenean sed velit id velit ultricies tempor. In egestas vestibulum justo eget malesuada.'+
            ' Quisque nec turpis ut nisl suscipit vestibulum. Nullam sit amet ultricies justo, non aliquet elit. Morbi malesuada consequat orci vitae aliquet.'+
            ' Praesent magna urna, pulvinar a rhoncus consequat, pharetra tristique turpis. Nullam mattis ac justo vel porttitor. Vestibulum maximus pellentesque est.',
             ['dashboard','home']),
            new Page('News','/news', 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis finibus luctus. Proin pretium tellus'+
            ' ac metus posuere, vitae pretium metus elementum. Aenean sed velit id velit ultricies tempor. In egestas vestibulum justo eget malesuada.'+
            ' Quisque nec turpis ut nisl suscipit vestibulum. Nullam sit amet ultricies justo, non aliquet elit. Morbi malesuada consequat orci vitae aliquet.'+
            ' Praesent magna urna, pulvinar a rhoncus consequat, pharetra tristique turpis. Nullam mattis ac justo vel porttitor. Vestibulum maximus pellentesque est.',
            ['News']),
            new Page('Articles', '/articles',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis finibus luctus. Proin pretium tellus'+
            ' ac metus posuere, vitae pretium metus elementum. Aenean sed velit id velit ultricies tempor. In egestas vestibulum justo eget malesuada.'+
            ' Quisque nec turpis ut nisl suscipit vestibulum. Nullam sit amet ultricies justo, non aliquet elit. Morbi malesuada consequat orci vitae aliquet.'+
            ' Praesent magna urna, pulvinar a rhoncus consequat, pharetra tristique turpis. Nullam mattis ac justo vel porttitor. Vestibulum maximus pellentesque est.',
            ['articles']),
          ];
        constructor() { }

    
    public getPages():Page[]{
        return this.pages;
    }

}