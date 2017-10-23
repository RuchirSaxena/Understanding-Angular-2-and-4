import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import {CoursesComponent} from "./courses/courses.component"
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AdminComponent,
    SummaryPipe

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    //Implemting DI 
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
