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
    time:any
    constructor(private authservice :AuthService,private route : Router,private toastr : ToastrService,){}
    canActivate() : boolean{
        this.token= localStorage.getItem('token')
        this.decode = jwt_decode(this.token)
        // this.decode = this.decode
        this.time=new Date().getTime();
        this.time=Math.round(this.time /1000)
       
        if(this.authservice.getToken() != null && this.decode.designation =='admin' && this.time <= this.decode.iat+30)
        {   
            return true
        }
        else{
            
            this.route.navigateByUrl('/layout/dashboard')
            this.toastr.warning('Please Login again','Access Denied')
            this.authservice.destoryService()
            return false
        }
    }   
    
   
}
