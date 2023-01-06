import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/shared/course/course.service';
import { DepartmentService } from 'src/app/shared/department/department.service';
import { SemesterService } from 'src/app/shared/semester/semester.service';
import { StudentService } from 'src/app/shared/student/student.service';

@Component({
  selector: 'app-m-student',
  templateUrl: './m-student.component.html',
  styleUrls: ['./m-student.component.css']
})
export class MStudentComponent implements OnInit {
  constructor(private studentservice : StudentService, private toastr : ToastrService, private spinner : NgxSpinnerService,private courseservice : CourseService, private departmentservice : DepartmentService, private semesterservice: SemesterService) { }

  departmentdata:any
  coursedata:any 
  semesterdata:any 
  studentdata:any 

  ngOnInit(): void {
    this.get_department()
    this.get_course()
    this.get_semester()
    this.get_student()
    
  }
  get_department(){
    this.spinner.show()
    this.departmentservice.get_department().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
         //console.log(res.data)
        this.departmentdata = res.data
        
      },
      error:(err:any)=>{
        this.spinner.hide()
        console.log(err)
      },
      complete:()=>{
        this.spinner.hide()
      }
    })
  }
  get_course(){
    this.spinner.show()
    this.courseservice.get_course().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        // console.log(res)
        this.coursedata = res.data
      },
      error:(err:any)=>{
        this.spinner.hide()
        console.log(err)
      },
      complete:()=>{
        this.spinner.hide()
      }
    })
  }
  get_semester(){
    this.spinner.show()
    this.semesterservice.get_semester().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        // console.log(res)
        this.semesterdata = res.data
      },
      error:(err:any)=>{
        this.spinner.hide()
        console.log(err)
      },
      complete:()=>{
        this.spinner.hide()
      }
    })
  }
  get_student(){
    this.spinner.show()
    this.studentservice.get_student().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        this.studentdata = res.data
      },
      error:(err:any)=>{
        this.spinner.hide()
      },
      complete:()=>{
        this.spinner.hide()
      }
    })
  }
}
