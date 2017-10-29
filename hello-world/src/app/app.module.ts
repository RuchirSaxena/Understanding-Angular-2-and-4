import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SignupFormComponent } from './Sign-Up Reactive From/signup-form.component';
import { FavoriteComponent } from './ReusableComponent/favorite.component';
import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import {CoursesComponent} from "./courses/courses.component"
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { PanelComponent } from './panel/panel.component';
import { SampledirectiveComponent } from './sampledirective/sampledirective.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form-Template Driven/contact-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AdminComponent,
    FavoriteComponent,
    SignupFormComponent,
    SummaryPipe,
    PanelComponent,
    SampledirectiveComponent,
    InputFormatDirective,
    ContactFormComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    //Implemting DI 
    CoursesService
   

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
