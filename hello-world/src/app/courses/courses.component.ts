import { EmailService } from './../email.service';
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
    <input #email type="text" (keyup.enter)="onKeyUp(email.value)" />
    <br>
    <p>2 way binding</p>
    <input  type="text" [value]="userName" (keyup.enter)="userName=$event.target.value; onKeyUp2WayBinding()" />

    <p>2 way binding =>Better way</p>
    <input [(ngModel)]="userName" (keyup.enter)="onKeyUp2WayBinding()" />
    <h2>Pipes aka Filters</h2>
    {{ course.title | uppercase}} <br/>
    {{ course.rating | number:'1.2-2' }} <br/>
    {{ course.students | number }} <br/>
    {{ course.price | currency:'AUD'}} <br/>
    {{ course.releaseDate | date:'shortDate' }} <br/>

    <h2>Custom Pipes</h2>

    {{ data | summary:20 }}

    `
})
export class CoursesComponent {
    title = "List of Courses1"
    courses;
    colSpan=2;
    isActive=false;
    userName="Ruchir Saxena";
    data='Lorem test Lorem test Lorem test Lorem test Lorem test Lorem test Lorem test Lorem test Lorem test Lorem test Lorem test Lorem test'

    course={
        title:"Complete Angualr Course",
        rating: 4.7884,
        students:30123,
        price:190.98,
        releaseDate:new Date(2016,3,4)
    };

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
    onKeyUp(email){
        console.log("Enter was pressed");
        console.log("Value ="+email);

    }
    //Binding 2 way
    onKeyUp2WayBinding(){
        console.log(this.userName);
    }
}