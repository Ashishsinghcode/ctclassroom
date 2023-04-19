import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //global
  baseurl :any
  teacherurl:any
  studenturl:any
  constructor(private http :HttpClient,@Inject('baseurl') _baseurl:any,private http2 :HttpClient,@Inject('teacherurl') _teacherurl:any,private http3 :HttpClient,@Inject('studenturl') _studenturl:any) { 
    this.baseurl = _baseurl
    this.teacherurl = _teacherurl
    this.studenturl = _studenturl
  }


  login(form:any){  
   
    return this.http.post(this.baseurl+"login",form)
  }
  teacherLogin(form:any){  
    return this.http2.post(this.teacherurl+"teacherLogin",form)
  }
  studentLogin(form:any){  
    return this.http3.post(this.studenturl+"studentLogin",form)
  }
  
}
