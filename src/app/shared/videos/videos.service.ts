import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  baseurl:any
  token:any
    constructor(private http: HttpClient,@Inject('baseurl') _baseurl:any,private authservice :AuthService ) { 
      this.baseurl = _baseurl
      this.token = this.authservice.getToken()
    }
    add_videos(form:any){
      // console.log(this.token)
      var header_object = new HttpHeaders().set('Authorization',this.token);
      return this.http.post(this.baseurl+"add_videos",form,{headers:header_object})
    }
    get_videos(){
      // console.log(this.token)
      var header_object = new HttpHeaders().set('Authorization',this.token);
      return this.http.get(this.baseurl+"get_videos",{headers:header_object})
    }
    delete_videos(form:any)
    {      
      var header_object = new HttpHeaders().set('Authorization',this.token);
      return this.http.post(this.baseurl+"delete_videos",form,{headers:header_object})
    }
  
}
