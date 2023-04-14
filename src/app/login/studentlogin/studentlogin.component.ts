import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {
  studentLogin = new FormGroup({
    email : new FormControl(),
    password : new FormControl()
  })
    constructor(private toastr : ToastrService, private spinner : NgxSpinnerService,private authservice : AuthService, private router : Router, private userservice : UserService) { }
  
    ngOnInit(): void {
      if(this.authservice.getService() != null){
        this.router.navigateByUrl('/admin/admin_dashboard')
       }
    }
    login(){
      this.spinner.show()
      this.userservice.login(this.studentLogin.value).subscribe(
        (res:any)=>{
          this.spinner.hide()
          if(res.success == true){
            
            this.authservice.createService(res)
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
    
}
