import { Component,OnInit ,Input, Output, EventEmitter  } from '@angular/core';


@Component({
    selector:'favorite',
    templateUrl:'./favorite.component.html',
    styleUrls:['./favorite.component.css']
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
