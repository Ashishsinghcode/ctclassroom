import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { DepartmentService } from 'src/app/shared/department/department.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-m-department',
  templateUrl: './m-department.component.html',
  styleUrls: ['./m-department.component.css']
})
export class MDepartmentComponent implements OnInit {
  deleteDepartment = new FormGroup({
    _id : new FormControl()
    })
  constructor(private spinner : NgxSpinnerService, private departmentservice :DepartmentService) { }

  ngOnInit(): void {
    this.get_department()
  }
  departmentdata = []

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

  delete_department(form:any){
    this.deleteDepartment.patchValue({'_id':form}) 
    Swal.fire({
      title: 'Are you sure?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    })
    .then((result) => {
      this.spinner.show()
      if (result.isConfirmed) {
        this.departmentservice.delete_department(this.deleteDepartment.value).subscribe({
          next:(result:any)=>{
            
            Swal.fire(
              result.message,
              result.msg,
              'success'
            )
            
            this.spinner.hide()
            this.get_department()
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

