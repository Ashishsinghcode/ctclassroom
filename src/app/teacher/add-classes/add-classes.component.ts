import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { ClassService } from 'src/app/shared/class/class.service';
import { SemesterService } from 'src/app/shared/semester/semester.service';
import { StudentService } from 'src/app/shared/student/student.service';
import { SubjectService } from 'src/app/shared/subject/subject.service';

@Component({
  selector: 'app-add-classes',
  templateUrl: './add-classes.component.html',
  styleUrls: ['./add-classes.component.css']
})
export class AddClassesComponent implements OnInit {
  addClass=new FormGroup({
    subject_id: new FormControl(),
    title:new FormControl(),
    link:new FormControl(),
    date:new FormControl(),
    time:new FormControl()
  })
  
    subjectdata:any
    
    constructor( private toastr : ToastrService, private spinner : NgxSpinnerService,private  subjectservice: SubjectService, private authservice : AuthService, private classservice : ClassService ) { }
    name:any
    ngOnInit(): void {
      this.get_subject() 
      this.name = localStorage.getItem('name')
      
      
    }
    get_subject(){
      this.spinner.show()
      this.subjectservice.get_subject().subscribe({
        next:(res:any)=>{
          this.spinner.hide()
          
          this.subjectdata = res.data
        },
        error:(err:any)=>{
          this.spinner.hide()
          console.log(err)
        },
        complete:()=>{
          this.spinner.hide()
        }
      })
    }
   
    add_lecture(){
      
      this.spinner.show()
      this.classservice.add_lecture(this.addClass.value).subscribe(
        (res:any)=>{
          this.spinner.hide()
          if(res.success == true){
            this.toastr.success('Success',res.message)
            
          }else{
            this.toastr.error('Failed',res.message)
          }
          
        },
        err=>{
          this.spinner.hide()
      }
      )
    } 
    }

