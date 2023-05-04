import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { AssignmentService } from 'src/app/shared/assignment/assignment.service';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/shared/student/student.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-v-assignment',
  templateUrl: './v-assignment.component.html',
  styleUrls: ['./v-assignment.component.css']
})
export class VAssignmentComponent implements OnInit {
AssignmentSubmit = new FormGroup({
assignment_id : new FormControl(),
student_id : new FormControl(),
assignment: new FormControl(),
sub_assignment_id:new FormControl()

})
  e1:any
  e2:any
  fileurl:any
  dataafter:any
  semester_id:any
  sub_data:any

  constructor(private spinner : NgxSpinnerService, private assignmentservice : AssignmentService,private sanitizer : DomSanitizer,@Inject('fileurl') _fileurl :any, private studentservice : StudentService,private toastr:ToastrService) { 
    this.fileurl =_fileurl
  }
  student_id:any
  ngOnInit(): void {
    this.student_id=localStorage.getItem('student_id')
    this.get_assignment()
   // this.get_sub_assignment()
    
   
  }
  photoname:any
  photo(event:any){
    // console.log(event.target.files)
    this.photoname = event.target.files[0]
    // this.addNotice.patchValue({'notice':event.target.files[0]})
  }
  assignmentdata = []
  assigndata=[]
  getfileurl(filename:any){
    
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.fileurl+"assignment/"+filename)
  }

  filter_data(val:any){  
    if(val['semester_id'] == localStorage.getItem('semester_id')){
      return val
    }
  }
  filter_data_assignment(sub_data:any,assignmentdata:any){
         
    for(var i=0;i<sub_data.length;i++){
      
      for(var j=0;j<assignmentdata.length;j++){
        if(sub_data[i]['assignment_id'] == assignmentdata[j]['_id']){
          
          return assignmentdata[j]
        }
      }
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

        //Submitted assignments 
        this.assignmentservice.get_sub_assignment().subscribe({
          next:(res:any)=>{
            this.spinner.hide()
            this.sub_data=res.data
          
          },
          error:(err:any)=>{
            this.spinner.hide()
            console.log(err)
          },
          complete:()=>{
            this.spinner.hide()
          }
        })
       
        //End submitted assignments
        
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

  submit_assignment(form:any){
    console.log(form)
    this.spinner.show()
    let data=new FormData()
    data.append('student_id',this.student_id)
    data.append('assignment_id',form)
    data.append('assignment',this.photoname)

    this.assignmentservice.submit_assignment(data).subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        if(res.success == true){

          this.toastr.success("Success",res.msg)
        }else{
          
          this.toastr.error(res.msg)
        }
      },
      error:(err:any)=>{
        this.spinner.hide()
        this.toastr.error("Failed",err.msg)

      },
      complete:()=>{
        this.spinner.hide()
      }
    })
  }


  
  
  get_sub_assignment(){
    this.spinner.show()
    this.assignmentservice.get_sub_assignment().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        this.sub_data=res.data
      
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
