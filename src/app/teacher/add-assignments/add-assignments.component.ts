import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AssignmentService } from 'src/app/shared/assignment/assignment.service';
import { SemesterService } from 'src/app/shared/semester/semester.service';

@Component({
  selector: 'app-add-assignments',
  templateUrl: './add-assignments.component.html',
  styleUrls: ['./add-assignments.component.css']
})
export class AddAssignmentsComponent implements OnInit {
  addAssignment= new FormGroup({
    title:new FormControl(),
    description: new FormControl(),
    assignment:new FormControl(),
    semester_id: new FormControl(),
    assign_date: new FormControl(),
    submission_date: new FormControl(),
    teacher_id:new FormControl()
  })
semesterdata:any
dataafter:any
teacher_id:any
  constructor(private spinner : NgxSpinnerService, private toastr : ToastrService, private assignmentservice : AssignmentService, private semesterservice : SemesterService) { }

  ngOnInit(): void {
    this.get_semester()
  }
  photoname:any
  photo(event:any){
    // console.log(event.target.files)
    this.photoname = event.target.files[0]
    this.teacher_id=localStorage.getItem('teacher_id')
    // this.addNotice.patchValue({'notice':event.target.files[0]})
  }
add_assignment(){
console.log(this.addAssignment.value)
    this.spinner.show()
    const data = new FormData()
    data.append('title',this.addAssignment.value.title)
    data.append('description',this.addAssignment.value.description)
    data.append('assignment',this.photoname)
    data.append('semester_id',this.addAssignment.value.semester_id)
    data.append('assign_date',this.addAssignment.value.assign_date)
    data.append('submission_date',this.addAssignment.value.submission_date)
    data.append('teacher_id',this.teacher_id)
    
    
    this.assignmentservice.add_assignment(data).subscribe({
      next:(result:any)=>{
        
        this.spinner.hide()
        if(result.success)
        {
          this.toastr.success("Success",result.message)
        }
        else{
          this.toastr.error("Try again",result.message)
        }
      },
      error:(err:any)=>{
        this.spinner.hide()
        
        this.toastr.error("server error",err)

      },
      
    })
  }
  filter_data(val:any){
    if(val['is_blocked'] == 'Unblocked'){
      return val
    }
  }
get_semester(){
  this.spinner.show()
  this.semesterservice.get_semester().subscribe({
    next:(res:any)=>{
      this.spinner.hide()
      this.dataafter=res.data.filter(this.filter_data)
      this.semesterdata = this.dataafter
    },
    error:(err:any)=>{
      this.spinner.hide()
       
    },
    complete:()=>{
      this.spinner.hide()
    }
  })
}

}
