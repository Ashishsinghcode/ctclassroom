import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AssignmentService } from 'src/app/shared/assignment/assignment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-check-assignment',
  templateUrl: './check-assignment.component.html',
  styleUrls: ['./check-assignment.component.css']
})
export class CheckAssignmentComponent implements OnInit {
  checkAssignment = new FormGroup({
    assignment_id : new FormControl()
    })

    fileurl:any
  constructor(private spinner : NgxSpinnerService, private assignmentservice : AssignmentService,private sanitizer : DomSanitizer,private toastr : ToastrService,@Inject('fileurl') _fileurl :any) { 
    this.fileurl =_fileurl
  }

  ngOnInit(): void {
    this.get_submitted_assignment()
    
  }
  submitdata = []

  getfileurl(filename:any){
    
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.fileurl+"submitted_assignment/"+filename)
  }
  filter_data(val:any){  
    if(val['checked'] != "checked"){
      return val
    }
  }

  get_submitted_assignment(){
    this.spinner.show()
    this.assignmentservice.get_sub_assignment().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        // console.log(res)
        this.submitdata = res.data.filter(this.filter_data)
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

check_assignment(form:any){
  this.checkAssignment.patchValue({'assignment_id':form})
  this.assignmentservice.check_assignment(this.checkAssignment.value).subscribe({
    next:(res:any)=>{
      this.spinner.hide()
      if(res.success==true){
        this.toastr.success("Success",res.msg)
      }else{
        this.toastr.error(res.msg)
        
      }
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
  

