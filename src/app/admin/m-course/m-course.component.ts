import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { CourseService } from 'src/app/shared/course/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-m-course',
  templateUrl: './m-course.component.html',
  styleUrls: ['./m-course.component.css']
})
export class MCourseComponent implements OnInit {
  deleteCourse = new FormGroup({
    _id : new FormControl()
    })
  constructor(private spinner : NgxSpinnerService, private courseservice :CourseService) { }

  ngOnInit(): void {
    this.get_course()
    
  }
  
  coursedata = []
  

  get_course(){
    this.spinner.show()
    this.courseservice.get_course().subscribe({
      next:(res:any)=>{
        this.coursedata = res.data
        this.spinner.hide()
        // console.log(this.coursedata)
      

      },
      error:(err:any)=>{
        this.spinner.hide()
      },
      complete:()=>{
        this.spinner.hide()
      }
    })
  }

  delete_course(form:any){
    this.deleteCourse.patchValue({'_id':form}) 
    // console.log(this.deleteCourse.value)
    Swal.fire({
      title: 'Are you sure?',
      text: "You can be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Block it!'
    })
    .then((result) => {
      if (result.isConfirmed) {
        this.courseservice.delete_course(this.deleteCourse.value).subscribe({
          next:(result:any)=>{
            Swal.fire(
              'Blocked!',
              'Your file has been Blocked.',
              'success'
            )
            this.get_course()
          },
          error:(err:any)=>{
            Swal.fire(
              'Try Again!',
              'Your file has not been Blocked.',
              'error'
            )
          }
        })
      }
    })
  }
  
}
