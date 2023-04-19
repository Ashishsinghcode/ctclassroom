import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { AssignmentService } from 'src/app/shared/assignment/assignment.service';

@Component({
  selector: 'app-v-assignment',
  templateUrl: './v-assignment.component.html',
  styleUrls: ['./v-assignment.component.css']
})
export class VAssignmentComponent implements OnInit {
  fileurl:any
  dataafter:any
  semester_id:any
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
  filter_data(val:any){
    
    if(val['semester_id'] == localStorage.getItem('semester_id')){
      return val
    }
  }
  get_assignment(){
    this.spinner.show()
    this.assignmentservice.get_assignment().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        // console.log(res)
        this.dataafter=res.data.filter(this.filter_data)
        this.assignmentdata = this.dataafter
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
