import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/shared/admin/admin.service';

@Component({
  selector: 'app-add-semester',
  templateUrl: './add-semester.component.html',
  styleUrls: ['./add-semester.component.css']
})
export class AddSemesterComponent implements OnInit {
  addSemester={
    semester_id:'',
    semester_name:'',
    course_id:'',
    department_id:''
  }
  
  constructor(private spinner : NgxSpinnerService, private toastr : ToastrService, private adminservice : AdminService ) { }
  departmentdata:any
  coursedata:any 

  ngOnInit(): void {
    this.get_department()
    this.get_course()
  }
  add_semester(){
    this.spinner.show()
    this.adminservice.add_semester(this.addSemester).subscribe(
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
         //console.log(res.data)
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
  get_course(){
    this.spinner.show()
    this.adminservice.get_course().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        // console.log(res)
        this.coursedata = res.data
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
