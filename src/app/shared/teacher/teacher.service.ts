import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  baseurl:any
  token:any
    constructor(private http: HttpClient
    ,@Inject('baseurl') _baseurl:any,private authservice :AuthService ) { 
      this.baseurl = _baseurl
      this.token = this.authservice.getToken()
    }
    //Department APIs
    add_teacher(form:any){
      var header_object = new HttpHeaders().set('Authorization',this.token);
      return this.http.post(this.baseurl +'add_teacher',form,{headers:header_object})
    }
      get_teacher(){
        // console.log(this.token)
        var header_object = new HttpHeaders().set('Authorization',this.token);
        return this.http.get(this.baseurl+"get_teacher",{headers:header_object})
      }
      get_single_teacher(form:any)
      {
        
        var header_object = new HttpHeaders().set('Authorization',this.token);
        return this.http.post(this.baseurl+"get_single_teacher",form,{headers:header_object})
      }
      update_teacher(form:any){        
        var header_object = new HttpHeaders().set('Authorization',this.token);
        return this.http.post(this.baseurl+"update_teacher",form,{headers:header_object})
      }
}
