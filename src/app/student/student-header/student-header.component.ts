import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.css']
})
export class StudentHeaderComponent implements OnInit {

  constructor(private authservice : AuthService, private router : Router , private toastr : ToastrService) { }

  ngOnInit(): void {
  }
  logout(){
    console.log(this.authservice.getToken())
    this.authservice.destoryService()
    this.router.navigateByUrl('/layout/dashboard')
    this.toastr.success('Success','Logout Successfully')
    console.log(this.authservice.getToken())
  }
}
