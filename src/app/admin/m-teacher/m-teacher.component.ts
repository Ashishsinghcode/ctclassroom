import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TeacherService } from 'src/app/shared/teacher/teacher.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-m-teacher',
  templateUrl: './m-teacher.component.html',
  styleUrls: ['./m-teacher.component.css']
})
export class MTeacherComponent implements OnInit {
manageTeacher ={
  status:''
}
  constructor(private spinner : NgxSpinnerService, private teacherservice : TeacherService) { }
teacherdata =[]
  ngOnInit(): void {
    this.get_teacher()
    
  }
  
  get_teacher(){
    this.spinner.show()
    this.teacherservice.get_teacher().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        this.teacherdata = res.data
      },
      error:(err:any)=>{
        this.spinner.hide()
      },
      complete:()=>{
        this.spinner.hide()
      }
    })
  }

  
}
