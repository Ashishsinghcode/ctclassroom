import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { CoursepageComponent } from './coursepage/coursepage.component';
import { AdminloginComponent } from './login/adminlogin/adminlogin.component';
import { StudentloginComponent } from './login/studentlogin/studentlogin.component';
import { TeacherloginComponent } from './login/teacherlogin/teacherlogin.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ContactComponent,
    CoursepageComponent,
    AdminloginComponent,
    StudentloginComponent,
    TeacherloginComponent,
    AdminComponent,
    AdminDashboardComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
