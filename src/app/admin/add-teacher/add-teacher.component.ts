import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TeacherService } from 'src/app/shared/teacher/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  addTeacher={
    teacher_id:'',
    teacher_name:'',
    email:'',
    qualification:'',
    contact:'',
    password:''
  }

  constructor(private teacherservice : TeacherService, private toastr : ToastrService, private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
  }
  add_teacher(){
  this.spinner.show()
  this.teacherservice.add_teacher(this.addTeacher).subscribe(
    (res:any)=>{
      if(res.success == true){
        this.toastr.success('Success',res.message)
        
      }else{
        this.toastr.error('Failed',res.message)
      }
      this.spinner.hide()
      
    },
    err=>{
      this.spinner.hide()
    }
  )
}
}
