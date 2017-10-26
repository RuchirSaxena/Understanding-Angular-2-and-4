import { Component } from '@angular/core';

@Component({
  selector: 'courses-directive',
  templateUrl: './sampledirective.component.html',
  styleUrls: ['./sampledirective.component.css']
})
export class SampledirectiveComponent  {
   courses=[];
   viewMode:string='map';
   coursesCount():boolean{
      if(this.courses.length>0){
        return true;
      }else{
        return false;
      }
   }

   coursesData=[
     {
       id:1,
       name:"Angular JS",
       duration:"1 month"
     },
     {
      id:2,
      name:"React JS",
      duration:"3 month"
     },{
      id:3,
      name:"Node JS",
      duration:"6 month"
     }
   ];
   onAdd(){
     this.coursesData.push({
      id:4,
      name:"Mongo DB",
      duration:"1 month"
     });
   }

   onDelete(course){
    this.coursesData.splice(course,1);
   }
   //USED only when we want to increace the performance of getting data from server
   trackCourse(index,course){
      return course?course.id:undefined;
   }
}
