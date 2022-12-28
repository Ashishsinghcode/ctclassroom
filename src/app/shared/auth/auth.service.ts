import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  createService(response:any){
    localStorage.setItem("email",response.data.email)
    localStorage.setItem("token",response.token)
  }

  getService(){
    return localStorage.getItem("email")
    
  }
  getToken(){
    return localStorage.getItem("token")
  }

  destoryService()
  {
    localStorage.removeItem("email")
    localStorage.removeItem("token")
  }
  
}
