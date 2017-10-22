import { CoursesService } from './../courses.service';
import {Component} from '@angular/core'

// Decorator function =>Adding one or more property for defining which part of
// angular component we want to use in our CoursesComponent
@Component({
    selector: 'courses', //<courses> "courses" , <div class="courses"></div> ".courses" ,<div id="courses"></div> "#courses"

    //The rendered HTMl we want
    template: `
    <h2>{{ "Title:"+getTitle() }}</h2>
    <h2 [textContent]="title"></h2>
    <ul>
        <li *ngFor="let course of courses">
             {{course}}
        </li>
    </ul>
  
    <table>
        <tr>
            <td [attr.colspan]="colSpan"></td>
        </tr>
    </table>
    <input class="btn btn-primary" [class.active]="isActive" type="button" value="Class Binding"/> 
    <br/>
    <input type="button" class="btn btn-info" [style.background-color]="isActive ? 'blue': 'green'"  value="Attribute Binding" />
    <br/>
  
    <button (click)="onSave($event)">Button Click Event</button>
    <p>Handling key press events in angular</p>
    <input type="text" (keyup.enter)="onKeyUp()" />

    `
})
export class CoursesComponent {
    title = "List of Courses1"
    courses;
    colSpan=2;
    isActive=false;

    constructor(service:CoursesService){
       // let service=new CoursesService; //Tightly coupled by using new operator
        this.courses=service.getCourses();
    }
    //To get the course title
    getTitle() {
        return this.title;
    }
    //Binding to click event of button
    onSave($event){
        console.log("Button was clicked");
        console.log($event);
    }
    //Binding KeyUp event 
    onKeyUp(){
        console.log("Enter was pressed");
    }
}