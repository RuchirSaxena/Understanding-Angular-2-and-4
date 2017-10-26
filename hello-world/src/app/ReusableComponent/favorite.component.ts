import { Component,OnInit ,Input, Output, EventEmitter, ViewEncapsulation  } from '@angular/core';


@Component({
    selector:'favorite',
    templateUrl:'./favorite.component.html',
    //3. Ways to apply css to our component 1.Seperate file using styleUrls
    //2.inline style in our component using styles property and pass array of styles
    //3.Write the style inside .html file of component using <style> tag property , though its not the recomended approach
    //The priorty  is give to the last way whichever is defined
   
    styles:[
        `
        .glyphicon{
            color: green;
        }
        `
    ],
    styleUrls:['./favorite.component.css'],
   /* Below we have a additonal property of Angular ie. encasulation
      This is used in context with CSS application to our component
      Its a Enum ViewEncapsulation which has 3 values :
      1.Emulated => Use angular mechanism of setting style of components to its native scope ie. style applied with be only used with this component 
      2.Native => Use the built in shadow DOM feature of browser but shadow DOM is not supported in all browsers currently only supported with chaome version 57 + , safari version 10 +
    3.None=> It will not keep the style to component scope and will leakout outside of the component resulting in global scope of app.

    Note: We should use the Emulated property in todays context and whic is by default option of ViewEncapsulation
   */
    encapsulation: ViewEncapsulation.Emulated

})
export class FavoriteComponent implements OnInit{
  //  @Input() isFavorite: boolean;
    //we can also define alias for our input property
    @Input('Fav') isFavorite: boolean;

    @Output('change') click =new EventEmitter();
    //Benefit of using alias is that if the isFavorite varible is changed to some other name like isSelected , then our functionality will be broken where this reusable component is using isFavorite varible ie.app.component.html, so alway use alias 
    //Note : But we have to manually update our favorite.component.html if the variable name is changed 
    ngOnInit(): void {
       // throw new Error("Method not implemented.");
    }

    constructor(){

    }

    onClick(){
        this.isFavorite=!this.isFavorite;
        //below we are passing a simple boolean value , but if required we can also pass a javascript object containing many key value pairs form our favorite TS class
        //this.change.emit(this.isFavorite);
        this.click.emit({isFavorite:this.isFavorite});
    }
   
}

export interface FavoriteEventArgs{
    isFavorite :boolean
  }
