import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/shared/admin/admin.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  addCourse={
    course_id:'',
    course_name:'',
    department_id:''
  }

  
  constructor(private spinner : NgxSpinnerService, private toastr : ToastrService, private adminservice : AdminService, ) { }
  
  departmentdata:any 

  ngOnInit(): void {
    this.get_department()
  }
  add_course(){
    this.spinner.show()
    this.adminservice.add_course(this.addCourse).subscribe(
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
  get_department(){
    this.spinner.show()
    this.adminservice.get_department().subscribe({
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
}
