import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  teacherurl:any
  token:any
    constructor(private http: HttpClient,@Inject('teacherurl') _teacherurl:any,private authservice :AuthService ) { 
      this.teacherurl =_teacherurl
      this.token = this.authservice.getToken()
    }
    add_video(form:any){
      // console.log(this.token)
      var header_object = new HttpHeaders().set('Authorization',this.token);
      return this.http.post(this.teacherurl+"add_video",form,{headers:header_object})
    }
    get_video(){
      // console.log(this.token)
      var header_object = new HttpHeaders().set('Authorization',this.token);
      return this.http.get(this.teacherurl+"get_video",{headers:header_object})
    }
    delete_video(form:any)
    {      
      var header_object = new HttpHeaders().set('Authorization',this.token);
      return this.http.post(this.teacherurl+"delete_video",form,{headers:header_object})
    }
  
}
