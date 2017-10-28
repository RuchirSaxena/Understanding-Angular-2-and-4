
import { Component } from '@angular/core';
import { FavoriteEventArgs } from './ReusableComponent/favorite.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular app';
  post= {
    title: 'Reusable Component',
    isFavorite: true
  };


 /*
 FavoriteEventArgs => Interface for strongly typing the arguments of tis method  =>onFavoriteChanged => Good way to implemnt

 we can also simply pass the javascript object having multiple key/value pair but we have to make then strongly typed ie args:{isFavorite:boolean} but if the object is complex then we should define interface in favorite component

 export interface FavoriteEventArgs{
    isFavorite :boolean
  }
 */
  // tslint:disable-next-line:one-line
  onFavoriteChanged(args: FavoriteEventArgs){
    console.log('Favorite changed!!!');
    console.log(args.isFavorite);
  }
}
