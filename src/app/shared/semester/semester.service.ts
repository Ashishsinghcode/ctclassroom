import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {
  baseurl:any
  token:any
  constructor(private http: HttpClient,@Inject('baseurl') _baseurl:any,private authservice :AuthService ) { 
    this.baseurl = _baseurl
    this.token = this.authservice.getToken()
  }
  //Semester APIs
  add_semester(form:any){
    return this.http.post(this.baseurl +'add_semester',form)
  }
  get_semester(){
    // console.log(this.token)
    var header_object = new HttpHeaders().set('Authorization',this.token);
    return this.http.get(this.baseurl+"get_semester",{headers:header_object})
  }
  delete_semester(form:any)
  {
    
    var header_object = new HttpHeaders().set('Authorization',this.token);
    return this.http.post(this.baseurl+"delete_semester",form,{headers:header_object})
  }
}
