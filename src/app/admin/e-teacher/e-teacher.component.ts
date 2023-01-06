import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeacherService } from 'src/app/shared/teacher/teacher.service';
import { FormControl, FormGroup, FormsModule ,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-e-teacher',
  templateUrl: './e-teacher.component.html',
  styleUrls: ['./e-teacher.component.css']
})
export class ETeacherComponent implements OnInit {
  updateTeacher=new FormGroup({
     _id: new FormControl(),
    teacher_name: new FormControl(),
    email:new FormControl(),
    qualification:new FormControl(),
    contact:new FormControl(),
    is_blocked: new FormControl()
    
  })
  _id:any
  constructor(private activatedroute : ActivatedRoute,private teacherservice : TeacherService,private toastr : ToastrService, private router : Router) { }
  
  ngOnInit(): void {
    this.updateTeacher.patchValue({'_id':this.activatedroute.snapshot.paramMap.get('_id')})
    
    this.get_single_teacher()
    
  }
  
  get_single_teacher(){
    this.teacherservice.get_single_teacher({'_id':this.updateTeacher.value._id}).subscribe(
      (res:any)=>{
        
        
         this.updateTeacher.patchValue({'teacher_name':res.data.teacher_name})
         this.updateTeacher.patchValue({'email':res.data.email})
         this.updateTeacher.patchValue({'qualification':res.data.qualification})
         this.updateTeacher.patchValue({'contact':res.data.contact})        
         this.updateTeacher.patchValue({'is_blocked':res.data.is_blocked})        
      },
      err=>{
      }
    )
  }

   update_teacher(){
    // console.log()
    console.log(this.updateTeacher.value)
     this.teacherservice.update_teacher(this.updateTeacher.value).subscribe(
       (result:any)=>{
        console.log(result)
         if(result.success==true)
         {
           this.toastr.success("Success",result.message)
           this.router.navigateByUrl("/admin/m_teacher")
         }
         else{
           this.toastr.error("Error",result.message)
         }
       },
       err=>{
        console.log(err)
       }
     )
   }

}
