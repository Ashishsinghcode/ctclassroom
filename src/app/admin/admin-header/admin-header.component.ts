import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private userservice :UserService, private authservice : AuthService, private toastr :ToastrService,private spinner : NgxSpinnerService,private router :Router) { }

  ngOnInit(): void {
  }
logout(){
  this.authservice.destoryService()
  this.router.navigateByUrl('/adminlogin')
  this.toastr.success('Success','Logout Successfully')
}
}
