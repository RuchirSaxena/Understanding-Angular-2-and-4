import { Component } from '@angular/core';

@Component({
  selector: 'courses-directive',
  templateUrl: './sampledirective.component.html',
  styleUrls: ['./sampledirective.component.css']
})
export class SampledirectiveComponent  {
   courses=[];

   coursesCount():boolean{
      if(this.courses.length>0){
        return true;
      }else{
        return false;
      }
   }
}
