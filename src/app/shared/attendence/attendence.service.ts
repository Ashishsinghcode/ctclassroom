import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {

  teacherurl:any
  token:any
    constructor(private http: HttpClient,@Inject('teacherurl') _teacherurl:any,private authservice :AuthService ) { 
      this.teacherurl = _teacherurl
      this.token = this.authservice.getToken()
    }
    get_student_list(form:any){
      
      var header_object = new HttpHeaders().set('Authorization',this.token);
      return this.http.post(this.teacherurl+"get_student_list",form,{headers:header_object})
    }
    // get_assignment(){
    //   // console.log(this.token)
    //   var header_object = new HttpHeaders().set('Authorization',this.token);
    //   return this.http.get(this.teacherurl+"get_assignment",{headers:header_object})
    // }
    // delete_assignment(form:any)
    // {      
    //   var header_object = new HttpHeaders().set('Authorization',this.token);
    //   return this.http.post(this.teacherurl+"delete_assignment",form,{headers:header_object})
    // }
}
