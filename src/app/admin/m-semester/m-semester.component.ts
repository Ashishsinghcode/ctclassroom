import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { CourseService } from 'src/app/shared/course/course.service';
import { DepartmentService } from 'src/app/shared/department/department.service';
import { SemesterService } from 'src/app/shared/semester/semester.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-m-semester',
  templateUrl: './m-semester.component.html',
  styleUrls: ['./m-semester.component.css']
})
export class MSemesterComponent implements OnInit {
deleteSemester =new FormGroup({
  _id : new FormControl()
})
  constructor(private spinner : NgxSpinnerService, private semesterservice :SemesterService, private departmentservice : DepartmentService, private courseservice : CourseService) { }
  ngOnInit(): void {
    this.get_semester()
    this.get_course()
    this.get_department()
  }
  semesterdata = []
  coursedata:any
  departmentdata:any

  get_semester(){
    this.spinner.show()
    this.semesterservice.get_semester().subscribe({
      next:(res:any)=>{
        this.semesterdata = res.data
        this.spinner.hide()
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

  delete_semester(form:any){
    this.deleteSemester.patchValue({'_id':form})
    
    Swal.fire({
      title: 'Are you sure?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Block it!'
    })
    .then((result) => {
      if (result.isConfirmed) {
        this.semesterservice.delete_semester(this.deleteSemester.value).subscribe({
          next:(result:any)=>{
            Swal.fire(
              result.message,
              result.msg,
              'success'
              )
              this.get_semester()
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
  

}
