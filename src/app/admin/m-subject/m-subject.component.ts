import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { CourseService } from 'src/app/shared/course/course.service';
import { DepartmentService } from 'src/app/shared/department/department.service';
import { SemesterService } from 'src/app/shared/semester/semester.service';
import { SubjectService } from 'src/app/shared/subject/subject.service';
import { TeacherService } from 'src/app/shared/teacher/teacher.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-m-subject',
  templateUrl: './m-subject.component.html',
  styleUrls: ['./m-subject.component.css']
})
export class MSubjectComponent implements OnInit {
deleteSubject = new FormGroup({
_id : new FormControl()
})
  constructor(private spinner : NgxSpinnerService, private semesterservice :SemesterService, private departmentservice : DepartmentService, private courseservice : CourseService, private subjectservice : SubjectService, private teacherservice : TeacherService) { }
  ngOnInit(): void {
    this.get_semester()
    this.get_course()
    this.get_department()
    this.get_subject()
    this.get_teacher()
    
  }
  semesterdata:any
  coursedata:any
  departmentdata:any
  teacherdata:any
  subjectdata:any
  
  get_subject(){
    this.spinner.show()
    this.subjectservice.get_subject().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        this.subjectdata = res.data
       
      },
      error:(err:any)=>{
        this.spinner.hide()
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
        this.semesterdata = res.data
        //console.log(this.semesterdata)
      },
      error:(err:any)=>{
        this.spinner.hide()
      },
      complete:()=>{
        this.spinner.hide()
      }
    })
  }

  delete_subject(form:any){
    this.deleteSubject.patchValue({'_id':form})
    console.log(form)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => {
      if (result.isConfirmed) {
        this.subjectservice.delete_subject(this.deleteSubject.value).subscribe({
          next:(result:any)=>{
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
              )
              
              this.get_subject()
            },
            error:(err:any)=>{
              Swal.fire(
                'Try Again!',
                'Your file has not been deleted.',
                'error'
                )
              }
            })
          }
        })
      }

      get_course(){
        this.spinner.show()
        this.courseservice.get_course().subscribe({
          next:(res:any)=>{
            this.spinner.hide()
            this.coursedata = res.data
            
          },
          error:(err:any)=>{
            this.spinner.hide()
          },
          complete:()=>{
            this.spinner.hide()
          }
        })
      }

  get_department(){
    this.spinner.show()
    this.departmentservice.get_department().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        // console.log(res)
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
  get_teacher(){
    this.spinner.show()
    this.teacherservice.get_teacher().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        // console.log(res)
        this.teacherdata = res.data
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
