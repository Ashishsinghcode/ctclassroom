import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { OtpService } from 'src/app/shared/otp/otp.service';
import { StudentService } from 'src/app/shared/student/student.service';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {
  studentLogin = new FormGroup({
    email : new FormControl(),
    password : new FormControl(),
    number:new FormControl()
  })
  OtpVerify =new FormGroup({
    otp:new FormControl()
  })
    constructor(private toastr : ToastrService, private spinner : NgxSpinnerService,private authservice : AuthService, private router : Router, private userservice : UserService, private otpservice : OtpService, private studentservice :StudentService) { }
  
    number:any

    ngOnInit(): void {
      // if(this.authservice.getService() != null){
      //   this.router.navigateByUrl('/layout/dashboard')
      //  }
    }
    login(){
      this.spinner.show()
      this.userservice.studentLogin(this.studentLogin.value).subscribe(
        (res:any)=>{
          this.spinner.hide()
          if(res.success == true){
            
            this.authservice.createServicestudent(res)
            this.toastr.success('Success',res.message)
            this.router.navigateByUrl('/student/student_dashboard')
          }
          else{
            this.toastr.error('Error',res.message)
          }
        },
        err=>{
          this.spinner.hide()
        }
      )
     }
    
    send_otp(){
      this.spinner.show()
      this.studentservice.get_student_by_email(this.studentLogin.value).subscribe(
        (res:any)=>{

          this.studentLogin.patchValue({'number':res.data.contact})
          this.otpservice.sent_otp(this.studentLogin.value).subscribe(
            (res:any)=>{
              this.spinner.hide()
              if(res.success == true){
                this.toastr.success("Success",res.msg)
              }
            },
            err=>{
              this.spinner.hide()
            }
          )
        }
      )
    }

    otp_verify(){
      this.spinner.hide()
      this.otpservice.verify_otp(this.OtpVerify.value).subscribe(
        (res:any)=>{
              if(res.success == true){
                this.login()
              }else{
                this.toastr.error("Error",res.msg)
              }
            },
            err=>{
              this.spinner.hide()
            }
          )
        }
      
    
}
