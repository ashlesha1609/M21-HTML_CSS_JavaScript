import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { HttpClientModule } from '@angular/common/http'
import { StudentService } from './student.service';
@NgModule({
  declarations: [
    AppComponent,
    StudentDetailComponent,
    StudentMarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
