import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  studenturl:any
  teacherurl:any
  token:any
    constructor(private http: HttpClient,@Inject('teacherurl') _teacherurl:any,private studenthttp: HttpClient,@Inject('studenturl') _studenturl:any,private authservice :AuthService ) { 
      this.teacherurl = _teacherurl
      this.studenturl = _studenturl
      this.token = this.authservice.getToken()
    }
    add_assignment(form:any){
      // console.log(this.token)
      var header_object = new HttpHeaders().set('Authorization',this.token);
      return this.http.post(this.teacherurl+"add_assignment",form,{headers:header_object})
    }
    get_assignment(){
      // console.log(this.token)
      var header_object = new HttpHeaders().set('Authorization',this.token);
      return this.http.get(this.teacherurl+"get_assignment",{headers:header_object})
    }
    delete_assignment(form:any)
    {      
      var header_object = new HttpHeaders().set('Authorization',this.token);
      return this.http.post(this.teacherurl+"delete_assignment",form,{headers:header_object})
    }
    submit_assignment(form:any){
      var header_object = new HttpHeaders().set('Authorization',this.token);
      return this.http.post(this.studenturl+"submit_assignment",form,{headers:header_object})
      
    }
    get_sub_assignment(){
      var header_object = new HttpHeaders().set('Authorization',this.token);
      return this.http.post(this.studenturl+"get_sub_assignment",{headers:header_object})
      
    }
    check_assignment(form:any){
      var header_object = new HttpHeaders().set('Authorization',this.token);
      return this.http.post(this.teacherurl+"check_assignment",form,{headers:header_object})
      
    }
  
}
