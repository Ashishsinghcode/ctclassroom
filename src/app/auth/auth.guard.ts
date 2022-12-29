import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private authservice :AuthService,private route : Router,private toastr : ToastrService){}
    canActivate() : boolean{
        if(this.authservice.getToken() != null)
        {
            return true
        }
        else{
            this.route.navigateByUrl('/adminlogin')
            this.toastr.warning('Invalid User','Please Login')
            return false
        }
    }
}