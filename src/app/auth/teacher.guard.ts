import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth/auth.service';
import jwt_decode from "jwt-decode";
import { TeacherService } from '../shared/teacher/teacher.service';
import { UserService } from '../shared/user/user.service';
 
@Injectable({
    providedIn: 'root'
})
export class TeacherGuard implements CanActivate {
    decode:any
    token:any
    constructor(private authservice :AuthService,private route : Router,private toastr : ToastrService, private teacherservice :UserService){}
    canActivate() : boolean{
            
            this.token= localStorage.getItem('token')
            this.decode = jwt_decode(this.token)
            // this.decode = this.decode
            // console.log(this.decode)

        if(this.authservice.getToken() != null && this.decode.designation =='teacher'  )
        {   
            return true
        }
        else{
            this.route.navigateByUrl('/layout/dashboard')
            this.toastr.warning('Unauthorized User','Denied')
            this.authservice.destoryService()
            return false
        }
    }   
    
   
}
