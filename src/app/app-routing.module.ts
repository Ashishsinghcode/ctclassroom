import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClassComponent } from './admin/add-class/add-class.component';
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

const routes: Routes = [
  {
    path:'',redirectTo:'layout/dashboard',pathMatch:"full"
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
      }
    ]
  },
  {
    path:'admin',component:AdminComponent,
    children:[
      {
        path:'admin-dashboard',component:AdminDashboardComponent
      },
      {
        path:'add_department',component:AddDepartmentComponent
      },
      {
        path:'add_course',component:AddCourseComponent
      },
      {
        path:'add_class',component:AddClassComponent
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
