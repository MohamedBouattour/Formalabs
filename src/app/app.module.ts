import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { DetailcoursComponent } from './detailcours/detailcours.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { EventServiceService } from '../app/services/event-service.service';
import { UserService } from '../app/services/user.service';
import { TopComponent } from './top/top.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    DetailcoursComponent,
    AboutComponent,
    ContactComponent,
    TopComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [EventServiceService,
    UserService
  ],
  bootstrap: [AppComponent ]
})
export class AppModule { }
