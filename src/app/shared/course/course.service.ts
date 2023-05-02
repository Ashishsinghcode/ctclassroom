import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
baseurl:any
token:any
  constructor(private http: HttpClient,@Inject('baseurl') _baseurl:any,private authservice :AuthService) { this.baseurl = _baseurl
    this.token = this.authservice.getToken() }
  // Course APIs
  add_course(form:any){
    var header_object = new HttpHeaders().set('Authorization',this.token);
    return this.http.post(this.baseurl +'add_course',form,{headers:header_object})
  }
  get_course(){
    
    var header_object = new HttpHeaders().set('Authorization',this.token);
    return this.http.get(this.baseurl+"get_course",{headers:header_object})
  }
  delete_course(form:any)
  {
    
    var header_object = new HttpHeaders().set('Authorization',this.token);
    return this.http.post(this.baseurl+"delete_course",form,{headers:header_object})
  }
}
