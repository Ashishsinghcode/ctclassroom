import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/shared/course/course.service';
import { DepartmentService } from 'src/app/shared/department/department.service';
import { SemesterService } from 'src/app/shared/semester/semester.service';

@Component({
  selector: 'app-add-semester',
  templateUrl: './add-semester.component.html',
  styleUrls: ['./add-semester.component.css']
})
export class AddSemesterComponent implements OnInit {
  addSemester= new FormGroup({
    semester_id:new FormControl(),
    semester_name:new FormControl(),
    course_id:new FormControl(),
    department_id:new FormControl()
  })
  
  constructor(private spinner : NgxSpinnerService, private toastr : ToastrService, private courseservice : CourseService, private departmentservice : DepartmentService, private semesterservice: SemesterService ) { }
  departmentdata:any
  coursedata:any 
  dataafter:any
  ngOnInit(): void {
    this.get_department()
    this.get_course()
  }
  add_semester(){
    this.spinner.show()
    this.semesterservice.add_semester(this.addSemester.value).subscribe(
      (res:any)=>{
        this.spinner.hide()
        if(res.success == true){
          this.toastr.success('Success',res.msg)
          
        }else{
          this.toastr.error('Failed',res.msg)
        }
        
      },
      err=>{
        this.spinner.hide()
    }
    )
  }

  filter_data(val:any){
    if(val['is_blocked'] == 'Unblocked'){
      return val
    }
  }

  get_department(){
    this.spinner.show()
    this.departmentservice.get_department().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
         //console.log(res.data)
        this.dataafter=res.data.filter(this.filter_data)
        this.departmentdata = this.dataafter
        
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
  get_course(){
    this.spinner.show()
    this.courseservice.get_course().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        // console.log(res)
        this.dataafter=res.data.filter(this.filter_data)
        this.coursedata = this.dataafter
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
