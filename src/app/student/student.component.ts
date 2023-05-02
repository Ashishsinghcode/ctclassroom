import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/user/user.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  token:any
  decode:any
  time:any
    constructor(private authservice :AuthService,private route : Router,private toastr : ToastrService) { }
  
    ngOnInit(): void {
      this.token= localStorage.getItem('token')
      this.decode = jwt_decode(this.token)
      // this.decode = this.decode
      this.time=new Date().getTime();
      this.time=Math.round(this.time /1000)
     
      if(this.time <= this.decode.iat+900)
      {   
          
      }
      else{
          
          // this.route.navigateByUrl('/layout/dashboard')
          // this.toastr.warning('Unauthorized User','Denied')
          this.toastr.warning('Session Timeout','Please Login again')
          this.authservice.destoryService()
          
      }
    }   

}
