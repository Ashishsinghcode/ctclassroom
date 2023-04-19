import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  createService(response:any){
    // console.log(response.token)
    localStorage.setItem("name",response.name)
    localStorage.setItem("email",response.email)
    localStorage.setItem("token",response.token)
    
  }
  createServicestudent(response:any){
    
    localStorage.setItem("name",response.name)
    localStorage.setItem("email",response.email)
    localStorage.setItem("token",response.token)
    localStorage.setItem("semester_id",response.semester_id)
    
  }

  getService(){
    return localStorage.getItem("email")
    
  }
  getToken(){
    return localStorage.getItem("token")
  }

  destoryService()
  {
    localStorage.removeItem('name')
    localStorage.removeItem("email")
    localStorage.removeItem("token")
  }
  
}
