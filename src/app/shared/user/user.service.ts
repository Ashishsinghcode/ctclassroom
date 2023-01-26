import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //global
  baseurl :any
  constructor(private http :HttpClient,@Inject('baseurl') _baseurl:any) { 
    this.baseurl = _baseurl
  }


  login(form:any){

    
    return this.http.post(this.baseurl+"login",form)
  }
  
}
