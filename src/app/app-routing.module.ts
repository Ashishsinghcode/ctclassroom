import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './admin/add-course/add-course.component';
import { AddDepartmentComponent } from './admin/add-department/add-department.component';
import { AddNoticeComponent } from './admin/add-notice/add-notice.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { AddSubjectComponent } from './admin/add-subject/add-subject.component';
import { AddTeacherComponent } from './admin/add-teacher/add-teacher.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { CoursepageComponent } from './coursepage/coursepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminloginComponent } from './login/adminlogin/adminlogin.component';
import { StudentloginComponent } from './login/studentlogin/studentlogin.component';
import { TeacherloginComponent } from './login/teacherlogin/teacherlogin.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { StudentComponent } from './student/student.component';
import { UploadAssignmentComponent } from './student/upload-assignment/upload-assignment.component';
import { UploadTestComponent } from './student/upload-test/upload-test.component';
import { VAssignmentComponent } from './student/v-assignment/v-assignment.component';
import { VLectureComponent } from './student/v-lecture/v-lecture.component';
import { VNotesComponent } from './student/v-notes/v-notes.component';
import { VTestComponent } from './student/v-test/v-test.component';
import { VVideoComponent } from './student/v-video/v-video.component';
import { AddAssignmentsComponent } from './teacher/add-assignments/add-assignments.component';
import { AddClassesComponent } from './teacher/add-classes/add-classes.component';
import { AddNotesComponent } from './teacher/add-notes/add-notes.component';
import { AddTestsComponent } from './teacher/add-tests/add-tests.component';
import { AddVideosComponent } from './teacher/add-videos/add-videos.component';
import { AttendenceComponent } from './teacher/attendence/attendence.component';
import { MAssignmentsComponent } from './teacher/m-assignments/m-assignments.component';
import { MClassesComponent } from './teacher/m-classes/m-classes.component';
import { MNotesComponent } from './teacher/m-notes/m-notes.component';
import { MTestsComponent } from './teacher/m-tests/m-tests.component';
import { MVideosComponent } from './teacher/m-videos/m-videos.component';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';
import { TeacherComponent } from './teacher/teacher.component';
import { VAttendenceComponent } from './teacher/v-attendence/v-attendence.component';
import { AuthGuard } from './auth/auth.guard';
import { MNoticeComponent } from './admin/m-notice/m-notice.component';
import { EStudentComponent } from './admin/e-student/e-student.component';
import { ETeacherComponent } from './admin/e-teacher/e-teacher.component';
import { MSemesterComponent } from './admin/m-semester/m-semester.component';
import { MCourseComponent } from './admin/m-course/m-course.component';
import { MDepartmentComponent } from './admin/m-department/m-department.component';
import { MStudentComponent } from './admin/m-student/m-student.component';
import { MTeacherComponent } from './admin/m-teacher/m-teacher.component';
import { AddSemesterComponent } from './admin/add-semester/add-semester.component';
import { MSubjectComponent } from './admin/m-subject/m-subject.component';
import { DispNoticeComponent } from './admin/disp-notice/disp-notice.component';
const routes: Routes = [
  {
    path:'',redirectTo:'layout/dashboard',pathMatch:"full"
  },
  {
    path:'disp_notice',component:DispNoticeComponent
  },
  {
    path:'layout',component:LayoutComponent,
    children:[
      {
        path:'dashboard',component:DashboardComponent
      },
      {
        path:'contact',component:ContactComponent
      },
      {
        path:'coursepage',component:CoursepageComponent
      },
     
    
    ]
  },
  {
    path:'admin',component:AdminComponent,canActivate:[AuthGuard],
    children:[
      {
        path:'admin_dashboard',component:AdminDashboardComponent
      },
      {
        path:'add_department',component:AddDepartmentComponent
      },
      {
        path:'add_course',component:AddCourseComponent
      },
      {
        path:'add_semester',component:AddSemesterComponent
      },
      {
        path:'add_teacher',component:AddTeacherComponent
      },
      {
        path:'add_subject',component:AddSubjectComponent
      },
      {
        path:'add_student',component:AddStudentComponent
      },
      {
        path:'add_notice',component:AddNoticeComponent
      },
      {
        path:'m_notice',component:MNoticeComponent
      },
      {
        path:'e_student/:_id',component:EStudentComponent
      },
      {
        path:'e_teacher/:_id',component:ETeacherComponent
      },
      {
        path:'m_semester',component:MSemesterComponent
      },
      {
        path:'m_course',component:MCourseComponent
      },
      {
        path:'m_department',component:MDepartmentComponent
      },
      {
        path:'m_subject',component:MSubjectComponent
      },
      {
        path:'m_student',component:MStudentComponent
      },
      {
        path:'m_teacher',component:MTeacherComponent
      },
    ] 
  },
  {
    path:'teacher',component:TeacherComponent,
    children:[
      {
        path:'teacher_dashboard',component:TeacherDashboardComponent
      },
      {
        path:'add_assignments',component:AddAssignmentsComponent
      },
      {
        path:'add_lecture',component:AddClassesComponent
      },
      {
        path:'add_notes',component:AddNotesComponent
      },
      {
        path:'add_class',component:AddClassesComponent
      },
      {
        path:'add_test',component:AddTestsComponent
      },
      {
        path:'add_videos',component:AddVideosComponent
      },
      {
        path:'attendence',component:AttendenceComponent
      },
      {
        path:'m_assignment',component:MAssignmentsComponent
      },
      {
        path:'m_lecture',component:MClassesComponent
      },
      {
        path:'m_notes',component:MNotesComponent
      },
      {
        path:'m_class',component:MClassesComponent
      },
      {
        path:'m_test',component:MTestsComponent
      },
      {
        path:'m_videos',component:MVideosComponent
      },
      {
        path:'v_attendence',component:VAttendenceComponent
      },
    ]
  },
  {
    path:'student',component:StudentComponent,
    children:[
      {
        path:'student_dashboard',component:StudentDashboardComponent
      },
      {
        path:'v_notes',component:VNotesComponent
      },
      {
        path:'v_test',component:VTestComponent
      },
      {
        path:'v_assignment',component:VAssignmentComponent
      },
      {
        path:'v_lecture',component:VLectureComponent
      },
      {
        path:'v_video',component:VVideoComponent
      },
      {
        path:'upload_assignment',component:UploadAssignmentComponent
      },
      {
        path:'upload_test',component:UploadTestComponent
      },
    ]
  },
  {
    path:'adminlogin',component:AdminloginComponent
  },
  {
    path:'teacherlogin',component:TeacherloginComponent
  },
  {
    path:'studentlogin',component:StudentloginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
