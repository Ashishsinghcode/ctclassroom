import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/shared/course/course.service';
import { DepartmentService } from 'src/app/shared/department/department.service';
import { SemesterService } from 'src/app/shared/semester/semester.service';
import { StudentService } from 'src/app/shared/student/student.service';

@Component({
  selector: 'app-e-student',
  templateUrl: './e-student.component.html',
  styleUrls: ['./e-student.component.css']
})
export class EStudentComponent implements OnInit {
  updateStudent= new FormGroup({
    _id: new FormControl(),
    rollno: new FormControl(),
    student_name:new FormControl(),
    department_id:new FormControl(),
    course_id:new FormControl(),
    semester_id:new FormControl(),
    email:new FormControl(),
    contact:new FormControl(),
    is_blocked: new FormControl()

  })
  
  constructor(private studentservice : StudentService, private toastr : ToastrService, private spinner : NgxSpinnerService,private courseservice : CourseService, private departmentservice : DepartmentService, private semesterservice: SemesterService,private activatedroute : ActivatedRoute,private router : Router) { }

  departmentdata:any
  coursedata:any 
  semesterdata:any 
  teacherdata:any 

  ngOnInit(): void {
    this.get_department()
    this.get_course()
    this.get_semester()
    this.updateStudent.patchValue({'_id':this.activatedroute.snapshot.paramMap.get('_id')})
    
    this.get_single_student()
    
  }
  get_single_student(){
    this.spinner.show()
    this.studentservice.get_single_student({'_id':this.updateStudent.value._id}).subscribe(
      (res:any)=>{
        this.spinner.hide()
        
         this.updateStudent.patchValue({'student_name':res.data.student_name})
         this.updateStudent.patchValue({'email':res.data.email})
         this.updateStudent.patchValue({'contact':res.data.contact})
         this.updateStudent.patchValue({'rollno':res.data.rollno})
         this.updateStudent.patchValue({'department_id':res.data.department_id})
         this.updateStudent.patchValue({'course_id':res.data.course_id})
         this.updateStudent.patchValue({'semester_id':res.data.semester_id})
         this.updateStudent.patchValue({'is_blocked':res.data.is_blocked})
               
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
update_student(){
  // console.log()
  console.log(this.updateStudent.value)
   this.studentservice.update_student(this.updateStudent.value).subscribe(
     (result:any)=>{
      console.log(result)
       if(result.success==true)
       {
         this.toastr.success("Success",result.message)
         this.router.navigateByUrl("/admin/m_student")
       }
       else{
         this.toastr.error("Error",result.message)
       }
     },
     err=>{
      console.log(err)
     }
   )
 }
}
