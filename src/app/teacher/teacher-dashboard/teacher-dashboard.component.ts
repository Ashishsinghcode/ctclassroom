import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  constructor(private authservice : AuthService, private router:Router) { }
  name : any
  decode:any
  value:any
  ngOnInit(): void {
    this.name = localStorage.getItem('name')
    //this.decode=localStorage.getItem('token')
    //this.decode=jwtDecode(this.decode)    
    //console.log(this.decode.email)
    //this.check(this.decode.email)
  }
  // check(value:any){
  //   if(value != 'AASTHA@GMAIL.COM')
  //   console.log("HEllo")
  //     this.router.navigateByUrl('/admin/add_department')

  // }

}
