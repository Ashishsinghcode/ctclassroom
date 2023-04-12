import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  teacherurl:any
  token:any
    constructor(private http: HttpClient,@Inject('teacherurl') _teacherurl:any,private authservice :AuthService ) { 
      this.teacherurl = _teacherurl
      this.token = this.authservice.getToken()
    }
    add_test(form:any){
      return this.http.post(this.teacherurl +'add_test',form)
    }
    get_test(){
      // console.log(this.token)
      var header_object = new HttpHeaders().set('Authorization',this.token);
      return this.http.get(this.teacherurl+"get_test",{headers:header_object})
    }
    delete_test(form:any)
    {      
      var header_object = new HttpHeaders().set('Authorization',this.token);
      return this.http.post(this.teacherurl+"delete_test",form,{headers:header_object})
    }
  
}
