import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  teacherurl:any
token:any
  constructor(private http: HttpClient,@Inject('teacherurl') _teacherurl:any,private authservice :AuthService ) { 
    this.teacherurl = _teacherurl
    this.token = this.authservice.getToken()
  }
  add_lecture(form:any){
    console.log(form)
    var header_object = new HttpHeaders().set('Authorization',this.token);
    return this.http.post(this.teacherurl+"add_lecture",form,{headers:header_object})
  }
  get_lecture(){
    // console.log(this.token)
    var header_object = new HttpHeaders().set('Authorization',this.token);
    return this.http.get(this.teacherurl+"get_lecture",{headers:header_object})
  }
  delete_lecture(form:any)
  {      
    var header_object = new HttpHeaders().set('Authorization',this.token);
    return this.http.post(this.teacherurl+"delete_lecture",form,{headers:header_object})
  }

}
