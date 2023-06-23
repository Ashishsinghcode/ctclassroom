import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { OtpService } from 'src/app/shared/otp/otp.service';
import { TeacherService } from 'src/app/shared/teacher/teacher.service';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-teacherlogin',
  templateUrl: './teacherlogin.component.html',
  styleUrls: ['./teacherlogin.component.css']
})
export class TeacherloginComponent implements OnInit {
teacherLogin = new FormGroup({
  email : new FormControl(),
  password : new FormControl(),
  number:new FormControl()
})
OtpVerify =new FormGroup({
  otp:new FormControl(),
  number:new FormControl()
})
Otpdata =new FormGroup({
  numbers:new FormControl(),
  otp:new FormControl()
})

public show:boolean = false;


msg:any
  constructor(private toastr : ToastrService, private spinner : NgxSpinnerService,private authservice : AuthService, private router : Router, private userservice : UserService,private teacherservice : TeacherService, private otpservice: OtpService) { }

  ngOnInit(): void {
    
  }
  toggle() {

    this.msg = this.msg;

  }
  login(){
    this.spinner.show()
    this.userservice.teacherLogin(this.teacherLogin.value).subscribe(
      (res:any)=>{
        this.spinner.hide()
        if(res.success == true){
          
          this.authservice.createServiceteacher(res)
          this.toastr.success('Success',res.message)
          this.router.navigateByUrl('/teacher/teacher_dashboard')
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
    this.teacherservice.get_teacher_by_email(this.teacherLogin.value).subscribe(
      (res:any)=>{
        if(res.success == true){
          this.msg=res.success
          this.teacherLogin.patchValue({'number':res.data.contact})
          this.otpservice.generate_otp(this.teacherLogin.value).subscribe(
            (otpres:any)=>{
              this.Otpdata.patchValue({'numbers':this.teacherLogin.value.number})
              this.Otpdata.patchValue({'otp':otpres.otp})
              //Sending otp
          this.otpservice.sent_otp(this.Otpdata.value).subscribe(
            (res:any)=>{
              console.log(res)
              this.spinner.hide()
              if(res.success == true){
                this.toastr.success("Success",res.msg)
              }
            },
            err=>{
              this.spinner.hide()
            }
          )}
          )
            
        }  else{
          this.spinner.hide()
          this.toastr.error("Failed",res.msg)
          this.msg=res.success



        }        // console.log(res.data.contact.slice(6,10))
      }
    )
  }

  otp_verify(){
    this.OtpVerify.patchValue({'number':this.teacherLogin.value.number})
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
