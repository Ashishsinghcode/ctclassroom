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
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AddCourseComponent } from './admin/add-course/add-course.component';
import { AddDepartmentComponent } from './admin/add-department/add-department.component';
import { AddClassComponent } from './admin/add-class/add-class.component';
import { AddTeacherComponent } from './admin/add-teacher/add-teacher.component';
import { AddSubjectComponent } from './admin/add-subject/add-subject.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { AddNoticeComponent } from './admin/add-notice/add-notice.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TeacherComponent } from './teacher/teacher.component';
import { AddNotesComponent } from './teacher/add-notes/add-notes.component';
import { AddAssignmentsComponent } from './teacher/add-assignments/add-assignments.component';
import { AddVideosComponent } from './teacher/add-videos/add-videos.component';
import { AddTestsComponent } from './teacher/add-tests/add-tests.component';
import { AddClassesComponent } from './teacher/add-classes/add-classes.component';
import { AttendenceComponent } from './teacher/attendence/attendence.component';
import { MNotesComponent } from './teacher/m-notes/m-notes.component';
import { MAssignmentsComponent } from './teacher/m-assignments/m-assignments.component';
import { MVideosComponent } from './teacher/m-videos/m-videos.component';
import { MTestsComponent } from './teacher/m-tests/m-tests.component';
import { MClassesComponent } from './teacher/m-classes/m-classes.component';
import { VAttendenceComponent } from './teacher/v-attendence/v-attendence.component';
import { TeacherHeaderComponent } from './teacher/teacher-header/teacher-header.component';
import { TeacherFooterComponent } from './teacher/teacher-footer/teacher-footer.component';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';

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
    AdminHeaderComponent,
    AdminFooterComponent,
    AddCourseComponent,
    AddDepartmentComponent,
    AddClassComponent,
    AddTeacherComponent,
    AddSubjectComponent,
    AddStudentComponent,
    AddNoticeComponent,
    TeacherComponent,
    AddNotesComponent,
    AddAssignmentsComponent,
    AddVideosComponent,
    AddTestsComponent,
    AddClassesComponent,
    AttendenceComponent,
    MNotesComponent,
    MAssignmentsComponent,
    MVideosComponent,
    MTestsComponent,
    MClassesComponent,
    VAttendenceComponent,
    TeacherHeaderComponent,
    TeacherFooterComponent,
    TeacherDashboardComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
