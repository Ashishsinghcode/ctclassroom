import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { AssignmentService } from 'src/app/shared/assignment/assignment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-m-assignments',
  templateUrl: './m-assignments.component.html',
  styleUrls: ['./m-assignments.component.css']
})
export class MAssignmentsComponent implements OnInit {
  deleteAssignment = new FormGroup({
    _id : new FormControl()
    })

    fileurl:any
  constructor(private spinner : NgxSpinnerService, private assignmentservice : AssignmentService,private sanitizer : DomSanitizer,@Inject('fileurl') _fileurl :any) { 
    this.fileurl =_fileurl
  }

  ngOnInit(): void {
    this.get_assignment()
    
  }
  assignmentdata = []

  getfileurl(filename:any){
    
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.fileurl+"assignment/"+filename)
  }

  get_assignment(){
    this.spinner.show()
    this.assignmentservice.get_assignment().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        // console.log(res)
        this.assignmentdata = res.data
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

  delete_assignment(form:any){
    this.deleteAssignment.patchValue({'_id':form})
    
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
        this.assignmentservice.delete_assignment(this.deleteAssignment.value).subscribe({
          next:(result:any)=>{
            
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.get_assignment()
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
