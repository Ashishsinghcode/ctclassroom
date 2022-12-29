import { Injectable,Inject } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
baseurl:any
token:any
  constructor(private http: HttpClient,@Inject('baseurl') _baseurl:any,private authservice :AuthService ) { 
    this.baseurl = _baseurl
    this.token = this.authservice.getToken()
  }
  //Department APIs
  add_department(form:any){
    return this.http.post(this.baseurl +'add_department',form)
  }
  get_department(){
    // console.log(this.token)
    var header_object = new HttpHeaders().set('Authorization',"Bearer "+this.token);

    return this.http.get(this.baseurl+"get_department",{headers:header_object})
  }
  delete_department(_id:any)
  {
    
    var header_object = new HttpHeaders().set('Authorization',"Bearer "+this.token);
    return this.http.delete(this.baseurl+"delete_department/"+_id,{headers:header_object})
  }

  // Course APIs
  add_course(form:any){
    return this.http.post(this.baseurl +'add_course',form)
  }
  get_course(){
    
    var header_object = new HttpHeaders().set('Authorization',"Bearer "+this.token);
    return this.http.get(this.baseurl+"get_course",{headers:header_object})
  }
  delete_course(_id:any)
  {
    
    var header_object = new HttpHeaders().set('Authorization',"Bearer "+this.token);
    return this.http.delete(this.baseurl+"delete_course/"+_id,{headers:header_object})
  }

  //Class APIs
  add_semester(form:any){
    return this.http.post(this.baseurl +'add_semester',form)
  }
  get_semester(){
    // console.log(this.token)
    var header_object = new HttpHeaders().set('Authorization',"Bearer "+this.token);
    return this.http.get(this.baseurl+"get_semester",{headers:header_object})
  }
  delete_semester(_id:any)
  {
    
    var header_object = new HttpHeaders().set('Authorization',"Bearer "+this.token);
    return this.http.delete(this.baseurl+"delete_semester/"+_id,{headers:header_object})
  }
}
