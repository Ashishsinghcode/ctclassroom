import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private authservice : AuthService, private route : Router) { }
name:any
token:any
decoded:any

  ngOnInit(): void {
    this.name = localStorage.getItem('name')
    // this.token =localStorage.getItem('token')
    // this.decoded = jwt_decode(this.token); 
    // console.log(this.decoded.email);
    // if(localStorage.getItem('email') != this.decoded.email ){
    //   this.route.navigateByUrl('/layout/dashboard')
    // }
  }

}
