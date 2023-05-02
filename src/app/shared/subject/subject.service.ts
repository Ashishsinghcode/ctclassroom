import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  baseurl:any
  token:any
  constructor(private http: HttpClient,@Inject('baseurl') _baseurl:any,private authservice :AuthService ) { 
    this.baseurl = _baseurl
    this.token = this.authservice.getToken()
  }
  //Semester APIs
  add_subject(form:any){
    var header_object = new HttpHeaders().set('Authorization',this.token);
    return this.http.post(this.baseurl +'add_subject',form,{headers:header_object})
  }
  get_subject(){
    // console.log(this.token)
    var header_object = new HttpHeaders().set('Authorization',this.token);
    return this.http.get(this.baseurl+"get_subject",{headers:header_object})
  }
  delete_subject(form:any)
  {    
    
    var header_object = new HttpHeaders().set('Authorization',this.token);
    return this.http.post(this.baseurl+"delete_subject",form,{headers:header_object})
  }
}
