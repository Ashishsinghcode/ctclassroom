import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  baseurl:any
  token:any
  constructor(private http: HttpClient,@Inject('baseurl') _baseurl:any,private authservice :AuthService ) { 
    this.baseurl = _baseurl
    this.token = this.authservice.getToken()
  }
  add_notice(form:any){
    //console.log(form)
    var header_object = new HttpHeaders().set('Authorization',this.token);
    return this.http.post(this.baseurl+"add_notice",form,{headers:header_object})
  }
  get_notice(){
    // console.log(this.token)
    var header_object = new HttpHeaders().set('Authorization',this.token);
    return this.http.get(this.baseurl+"get_notice",{headers:header_object})
  }
  delete_notice(form:any)
  {    
    
    var header_object = new HttpHeaders().set('Authorization',this.token);
    return this.http.post(this.baseurl+"delete_notice",form,{headers:header_object})
  }
  sent_mail(form:any){
    //console.log(form)
    var header_object = new HttpHeaders().set('Authorization',this.token);
    return this.http.post(this.baseurl+"mailer",form,{headers:header_object})
  }
}
