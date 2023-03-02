import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ClassService } from 'src/app/shared/class/class.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-m-classes',
  templateUrl: './m-classes.component.html',
  styleUrls: ['./m-classes.component.css']
})
export class MClassesComponent implements OnInit {
  deleteclass = new FormGroup({
    _id:new FormControl()
  })


  
lecturedata:any
  constructor(private classservice : ClassService , private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
    this.get_class()
  }
get_class(){
  this.spinner.show()
  this.classservice.get_lecture().subscribe({
    next:(res:any)=>{
      this.spinner.hide()
      // console.log(res)
      this.lecturedata = res.data
      console.log(res.data)
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
delete_class(form:any){
    this.deleteclass.patchValue({'_id':form})
    
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
        this.classservice.delete_lecture(this.deleteclass.value).subscribe({
          next:(result:any)=>{
            
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.get_class()
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
