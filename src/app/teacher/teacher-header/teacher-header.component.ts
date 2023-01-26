import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-teacher-header',
  templateUrl: './teacher-header.component.html',
  styleUrls: ['./teacher-header.component.css']
})
export class TeacherHeaderComponent implements OnInit {

  constructor(private authservice : AuthService, private router : Router , private toastr : ToastrService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authservice.destoryService()
    this.router.navigateByUrl('/teacherlogin')
    this.toastr.success('Success','Logout Successfully')
  }
}
