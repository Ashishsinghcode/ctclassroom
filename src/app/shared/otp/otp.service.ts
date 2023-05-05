import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  baseurl:any
  token:any
  constructor(private http: HttpClient,@Inject('baseurl') _baseurl:any,private authservice :AuthService ) { 
    this.baseurl = _baseurl
    this.token = this.authservice.getToken()
  }
  sent_otp(form:any){
    //console.log(form)
    
    return this.http.post(this.baseurl+"otp",form)
  }
  verify_otp(form:any){
    //console.log(form)
    
    return this.http.post(this.baseurl+"verify_otp",form)
  }
}
