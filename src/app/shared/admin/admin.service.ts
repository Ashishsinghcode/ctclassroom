import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
baseurl:any
  constructor(private http: HttpClient,@Inject('baseurl') _baseurl:any) { 
    this.baseurl = _baseurl
  }
  add_department(form:any){
    return this.http.post(this.baseurl +'/add_department',form)
  }
}
