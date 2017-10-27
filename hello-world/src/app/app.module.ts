import { FavoriteComponent } from './ReusableComponent/favorite.component';
import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import {CoursesComponent} from "./courses/courses.component"
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { PanelComponent } from './panel/panel.component';
import { SampledirectiveComponent } from './sampledirective/sampledirective.component';
import { InputFormatDirective } from './input-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AdminComponent,
    FavoriteComponent,
    SummaryPipe,
    PanelComponent,
    SampledirectiveComponent,
    InputFormatDirective

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
