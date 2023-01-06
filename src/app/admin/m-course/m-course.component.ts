import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CourseService } from 'src/app/shared/course/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-m-course',
  templateUrl: './m-course.component.html',
  styleUrls: ['./m-course.component.css']
})
export class MCourseComponent implements OnInit {

  constructor(private spinner : NgxSpinnerService, private courseservice :CourseService) { }

  ngOnInit(): void {
    this.get_course()
    
  }
  
  coursedata = []
  

  get_course(){
    this.spinner.show()
    this.courseservice.get_course().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        this.coursedata = res.data
        console.log(this.coursedata)
      

      },
      error:(err:any)=>{
        this.spinner.hide()
      },
      complete:()=>{
        this.spinner.hide()
      }
    })
  }

  delete_course(_id:any){
    
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
        this.courseservice.delete_course(_id).subscribe({
          next:(result:any)=>{
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.get_course()
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
  
}
