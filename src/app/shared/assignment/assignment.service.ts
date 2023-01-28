import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  baseurl:any
  token:any
    constructor(private http: HttpClient,@Inject('baseurl') _baseurl:any,private authservice :AuthService ) { 
      this.baseurl = _baseurl
      this.token = this.authservice.getToken()
    }
    add_assignment(form:any){
      // console.log(this.token)
      var header_object = new HttpHeaders().set('Authorization',this.token);
      return this.http.post(this.baseurl+"add_assignment",form,{headers:header_object})
    }
    get_assignment(){
      // console.log(this.token)
      var header_object = new HttpHeaders().set('Authorization',this.token);
      return this.http.get(this.baseurl+"get_assignment",{headers:header_object})
    }
    delete_assignment(form:any)
    {      
      var header_object = new HttpHeaders().set('Authorization',this.token);
      return this.http.post(this.baseurl+"delete_assignment",form,{headers:header_object})
    }
  
}