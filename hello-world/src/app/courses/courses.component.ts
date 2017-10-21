import { CoursesService } from './../courses.service';
import {Component} from '@angular/core'

// Decorator function =>Adding one or more property for defining which part of
// angular component we want to use in our CoursesComponent
@Component({
    selector: 'courses', //<courses> "courses" , <div class="courses"></div> ".courses" ,<div id="courses"></div> "#courses"

    //The rendered HTMl we want
    template: `
    <h2>{{ "Title:"+getTitle() }}</h2>
    <ul>
        <li *ngFor="let course of courses">
             {{course}}
        </li>
    </ul>
    `
})
export class CoursesComponent {
    title = "List of Courses"
    courses;

    constructor(service:CoursesService){
       // let service=new CoursesService; //Tightly coupled by using new operator
        this.courses=service.getCourses();
    }
    //To get the course title
    getTitle() {
        return this.title;
    }
}