import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { TestService } from 'src/app/shared/test/test.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-m-tests',
  templateUrl: './m-tests.component.html',
  styleUrls: ['./m-tests.component.css']
})
export class MTestsComponent implements OnInit {
  deletetest = new FormGroup({
    _id : new FormControl()
    })

  constructor(private spinner : NgxSpinnerService, private testservice : TestService) { 
    
  }

  ngOnInit(): void {
    this.get_test()
    
  }
  testdata = []

  get_test(){
    this.spinner.show()
    this.testservice.get_test().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        console.log(res.data)
        this.testdata = res.data
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

  delete_test(form:any){
    this.deletetest.patchValue({'_id':form})
    
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
        this.testservice.delete_test(this.deletetest.value).subscribe({
          next:(result:any)=>{
            
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.get_test()
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

