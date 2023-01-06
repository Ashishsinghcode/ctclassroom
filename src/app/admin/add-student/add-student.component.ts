import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/shared/course/course.service';
import { DepartmentService } from 'src/app/shared/department/department.service';
import { SemesterService } from 'src/app/shared/semester/semester.service';
import { StudentService } from 'src/app/shared/student/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  addStudent= new FormGroup({
    rollno: new FormControl(),
    student_name:new FormControl(),
    department_id:new FormControl(),
    course_id:new FormControl(),
    semester_id:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
    contact:new FormControl()
  })
  
  constructor(private studentservice : StudentService, private toastr : ToastrService, private spinner : NgxSpinnerService,private courseservice : CourseService, private departmentservice : DepartmentService, private semesterservice: SemesterService) { }

  departmentdata:any
  coursedata:any 
  semesterdata:any 
  teacherdata:any 

  ngOnInit(): void {
    this.get_department()
    this.get_course()
    this.get_semester()
    this.addStudent.patchValue({'department_id':'Select Department'})
    this.addStudent.patchValue({'course_id':'Select Course'})
    this.addStudent.patchValue({'semester_id':'Select Semester'})
  }
  add_student(){
  this.spinner.show()
  this.studentservice.add_student(this.addStudent.value).subscribe(
    (res:any)=>{
      console.log(this.addStudent.value)
      if(res.success == true){
        this.toastr.success('Success',res.message)
        
      }else{
        this.toastr.error('Failed',res.message)
      }
      this.spinner.hide()
      
    },
    err=>{
      this.spinner.hide()
    }
  )
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
}
