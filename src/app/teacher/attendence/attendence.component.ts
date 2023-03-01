import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AttendenceService } from 'src/app/shared/attendence/attendence.service';
import { SemesterService } from 'src/app/shared/semester/semester.service';
import { StudentService } from 'src/app/shared/student/student.service';
@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {
Attendence = new FormGroup({
  semester_id : new FormControl()
})
  semesterdata:any
  studentdata:any
  constructor(private studentservice : StudentService, private toastr : ToastrService, private spinner : NgxSpinnerService,private  semesterservice: SemesterService, private attendenceservice : AttendenceService) { }
  
  ngOnInit(): void {
    this.get_semester()
  }
  get_semester(){
    this.spinner.show()
    this.semesterservice.get_semester().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        
        this.semesterdata = res.data
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

  get_student_list(){
    this.spinner.show()
    this.attendenceservice.get_student_list(this.Attendence.value).subscribe({
      next:(res:any)=>{
        this.spinner.hide()
         //console.log(res.data)
        
        this.studentdata = res.data
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
