import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth/auth.service';
import jwt_decode from "jwt-decode";
 
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    decode:any
    token:any
    constructor(private authservice :AuthService,private route : Router,private toastr : ToastrService){}
    canActivate() : boolean{
        this.token= localStorage.getItem('token')
        this.decode = jwt_decode(this.token)
        this.decode = this.decode.email
        console.log(this.decode)
        if(this.authservice.getToken() != null && this.decode == 'ADMIN@GMAIL.COM'  )
        {   
            return true
        }
        else{
            this.route.navigateByUrl('/layout/dashboard')
            this.toastr.warning('Unauthorized User','Denied')
            return false
        }
    }   
    
   
}
export class TeacherGuard implements  CanActivate {
    decode:any
    token:any
    constructor(private authservice :AuthService,private route : Router,private toastr : ToastrService){}
    canActivate() : boolean{
        this.token= localStorage.getItem('token')
        this.decode = jwt_decode(this.token)
        this.decode = this.decode.email
        console.log(this.decode)
        if(this.authservice.getToken() != null && this.decode =='AASTHA@GMAIL.COM' )
        {   
            return true
        }
        else{
            this.route.navigateByUrl('/layout/dashboard')
            this.toastr.warning('Unauthorized User','Denied')
            return false
        }
    }   
    
   
}