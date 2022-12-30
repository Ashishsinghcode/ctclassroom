import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from 'src/app/shared/admin/admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-m-semester',
  templateUrl: './m-semester.component.html',
  styleUrls: ['./m-semester.component.css']
})
export class MSemesterComponent implements OnInit {

  constructor(private spinner : NgxSpinnerService, private adminservice :AdminService) { }
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
    this.adminservice.get_semester().subscribe({
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

  delete_semester(_id:any){
    
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
        this.adminservice.delete_semester(_id).subscribe({
          next:(result:any)=>{
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
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
        this.adminservice.get_course().subscribe({
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
    this.adminservice.get_department().subscribe({
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
