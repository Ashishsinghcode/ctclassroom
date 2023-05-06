import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { NoticeService } from 'src/app/shared/notice/notice.service';
import { TeacherService } from 'src/app/shared/teacher/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  addTeacher= new FormGroup({
    teacher_id:new FormControl(),
    teacher_name:new FormControl(),
    email:new FormControl(),
    qualification:new FormControl(),
    contact:new FormControl(),
    password:new FormControl()
  })

  constructor(private teacherservice : TeacherService, private toastr : ToastrService, private spinner : NgxSpinnerService, private mailservice : NoticeService) { }

  ngOnInit(): void {
  }
  add_teacher(){
  this.spinner.show()
  this.teacherservice.add_teacher(this.addTeacher.value).subscribe(
    (res:any)=>{
      if(res.success == true){
        this.toastr.success('Success',res.message)
        this.send_mail()
        
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
send_mail(){

      const mail_data = new FormData()
      mail_data.append('title',"You are enrolled with CT Group of Institutuons")
      mail_data.append('description',"Your Login Credential is :"+" \n "+" Username :"+this.addTeacher.value.email+" \n  "+"Password :"+this.addTeacher.value.password)
      mail_data.append('email',this.addTeacher.value.email)
      //console.log(this.addTeacher.value)
      this.mailservice.sent_mail(mail_data).subscribe({
        next:(result:any)=>{
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
}
