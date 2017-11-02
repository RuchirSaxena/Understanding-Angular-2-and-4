import * as path from 'path';
import { RouterModule, Routes } from '@angular/router';
import { ServersService } from './servers/servers.service';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
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
import { PostComponent } from './http/http.component';

import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';

const appRoutes:Routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'users',
    component:UsersComponent,
  },
  {
    path:'users/:id/:name',
    component:UserComponent
  },
  {
    path:'servers',
    component:ServerComponent
  }
];

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
    ContactFormComponent,
    PostComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [
    //For Implemting DI we need to add it to provide to use it in our component    
    CoursesService,
    ServersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
