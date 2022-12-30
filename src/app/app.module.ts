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
import { StudentComponent } from './student/student.component';
import { VNotesComponent } from './student/v-notes/v-notes.component';
import { VAssignmentComponent } from './student/v-assignment/v-assignment.component';
import { VLectureComponent } from './student/v-lecture/v-lecture.component';
import { VTestComponent } from './student/v-test/v-test.component';
import { VVideoComponent } from './student/v-video/v-video.component';
import { UploadAssignmentComponent } from './student/upload-assignment/upload-assignment.component';
import { UploadTestComponent } from './student/upload-test/upload-test.component';
import { StudentHeaderComponent } from './student/student-header/student-header.component';
import { StudentFooterComponent } from './student/student-footer/student-footer.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { MCourseComponent } from './admin/m-course/m-course.component';
import { MDepartmentComponent } from './admin/m-department/m-department.component';
import { MNoticeComponent } from './admin/m-notice/m-notice.component';
import { MStudentComponent } from './admin/m-student/m-student.component';
import { EStudentComponent } from './admin/e-student/e-student.component';
import { ETeacherComponent } from './admin/e-teacher/e-teacher.component';
import { MSubjectComponent } from './admin/m-subject/m-subject.component';
import { MTeacherComponent } from './admin/m-teacher/m-teacher.component';
import { MSemesterComponent } from './admin/m-semester/m-semester.component';
import { AddSemesterComponent } from './admin/add-semester/add-semester.component';
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
    StudentComponent,
    VNotesComponent,
    VAssignmentComponent,
    VLectureComponent,
    VTestComponent,
    VVideoComponent,
    UploadAssignmentComponent,
    UploadTestComponent,
    StudentHeaderComponent,
    StudentFooterComponent,
    StudentDashboardComponent,
    MCourseComponent,
    MDepartmentComponent,
    MNoticeComponent,
    MStudentComponent,
    EStudentComponent,
    ETeacherComponent,
    MSubjectComponent,
    MTeacherComponent,
    MSemesterComponent,
    AddSemesterComponent
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    CommonModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot(),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
