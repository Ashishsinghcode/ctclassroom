import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
baseurl : any
token:any
  constructor( private http : HttpClient,@Inject('baseurl') _baseurl:any,private authservice : AuthService,    ) {
    this.baseurl = _baseurl
    this.token = this.authservice.getToken()
   }
  //Department APIs
  add_department(form:any){
    return this.http.post(this.baseurl +'add_department',form)
  }
  get_department(){
    
    var header_object = new HttpHeaders().set('Authorization',this.token);

    return this.http.get(this.baseurl+"get_department",{headers:header_object})
  }
  delete_department(form:any)
  {
    
    var header_object = new HttpHeaders().set('Authorization',this.token);
    return this.http.post(this.baseurl+"delete_department",form,{headers:header_object})
  }
  
}
