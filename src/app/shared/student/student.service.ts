import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseurl:any
  token:any
    constructor(private http: HttpClient
    ,@Inject('baseurl') _baseurl:any,private authservice :AuthService ) { 
      this.baseurl = _baseurl
      this.token = this.authservice.getToken()
    }
    //Department APIs
    add_student(form:any){
      var header_object = new HttpHeaders().set('Authorization',this.token);
      return this.http.post(this.baseurl +'add_student',form,{headers:header_object})
    }
      get_student(){
        // console.log(this.token)
        var header_object = new HttpHeaders().set('Authorization',this.token);
        return this.http.get(this.baseurl+"get_student",{headers:header_object})
      }
      get_single_student(form:any)
      {
        
        var header_object = new HttpHeaders().set('Authorization',this.token);
        return this.http.post(this.baseurl+"get_single_student",form,{headers:header_object})
      }
      update_student(form:any){        
        var header_object = new HttpHeaders().set('Authorization',this.token);
        return this.http.post(this.baseurl+"update_student",form,{headers:header_object})
      }
}
