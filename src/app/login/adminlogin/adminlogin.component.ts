import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { UserService } from 'src/app/shared/user/user.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
loginForm = new FormGroup({
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
    this.userservice.login(this.loginForm.value).subscribe(
      (res:any)=>{
        this.spinner.hide()
        if(res.success == true){
          
          this.authservice.createService(res)
          this.toastr.success('Success',res.message)
          this.router.navigateByUrl('/admin/admin_dashboard')
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

