import { Injectable } from "@angular/core";
import { Article } from "../model/article.model";
import { TextboxQuestion } from "../dynamic-form/question-textbox";
import { QuestionBase } from "../dynamic-form/question-base";

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
    //create the set of questions for dynamic forms
    /*public getArticlesQuestions(){
         let questions: QuestionBase<any>[];
            let questionTitle= new TextboxQuestion({
                key: 'title',
                label: 'Title',
                value: this.articles[0].title,
                required: true,
                order: 0
              });
              let questionImage= new TextboxQuestion({
                key: 'imagePath',
                label: 'Image Path',
                value: this.articles[0].imagePath,
                required: true,
                order: 1
              });
              questions.push(questionTitle,questionImage);
        
        
    }*/

    

}