import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  baseurl:any
  otpurl:any
  token:any
  authorization :any
  constructor(private http: HttpClient,@Inject('baseurl') _baseurl:any,private httpotp: HttpClient,@Inject('otpurl') _otpurl:any,private authservice :AuthService ) { 
    this.baseurl = _baseurl
    this.token = this.authservice.getToken()
   
    
  }
  sent_otp(form:any){
    //console.log(form)
    
    return this.http.post(this.baseurl+"send_otp",form)
  }
  generate_otp(form:any){
    //console.log(form)
  
    return this.http.post(this.baseurl+"generate_otp",form)
  }
  verify_otp(form:any){
    //console.log(form)
    
    return this.http.post(this.baseurl+"verify_otp",form)
  }
}
