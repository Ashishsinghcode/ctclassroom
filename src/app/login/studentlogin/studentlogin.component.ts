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
  Otpdata =new FormGroup({
    numbers:new FormControl(),
    otp:new FormControl()
  })
  OtpVerify =new FormGroup({  
    number:new FormControl(),
    otp:new FormControl()
  })
    constructor(private toastr : ToastrService, private spinner : NgxSpinnerService,private authservice : AuthService, private router : Router, private userservice : UserService, private otpservice : OtpService, private studentservice :StudentService) { }
  
  number:any
  msg:any
    ngOnInit(): void {
     
    }
    toggle() {

      this.msg = this.msg;
  
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
      //Getting student
      this.studentservice.get_student_by_email(this.studentLogin.value).subscribe(
        (res:any)=>{
          if(res.success == true){
            this.msg=res.success
            this.studentLogin.patchValue({'number':res.data.contact})
            //Generating OTP
            this.otpservice.generate_otp(this.studentLogin.value).subscribe(
              (otpres:any)=>{
                this.Otpdata.patchValue({'numbers':this.studentLogin.value.number})
                this.Otpdata.patchValue({'otp':otpres.otp})
                //Sending otp
                this.otpservice.sent_otp(this.Otpdata.value).subscribe(
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
              }else{
                this.spinner.hide()
                this.toastr.error("Failed",res.msg)
                this.msg=res.success
  
            }

        }
      )
    }

    otp_verify(){
      this.OtpVerify.patchValue({'number':this.studentLogin.value.number})
      this.spinner.show()
      this.otpservice.verify_otp(this.OtpVerify.value).subscribe(
        (res:any)=>{
          this.spinner.hide()
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
