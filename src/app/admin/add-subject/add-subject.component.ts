import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/shared/course/course.service';
import { DepartmentService } from 'src/app/shared/department/department.service';
import { SemesterService } from 'src/app/shared/semester/semester.service';
import { SubjectService } from 'src/app/shared/subject/subject.service';
import { TeacherService } from 'src/app/shared/teacher/teacher.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  addSubject= new FormGroup({
    department_id : new FormControl(),
    course_id : new FormControl(),
    semester_id : new FormControl(),
    subject_id : new FormControl(),
    subject_name : new FormControl(),
    teacher_id : new FormControl(),


  })
  
  constructor(private spinner : NgxSpinnerService, private toastr : ToastrService, private courseservice : CourseService, private departmentservice : DepartmentService, private semesterservice: SemesterService,private subjectservice : SubjectService,private teacherservice :TeacherService ) { }
  departmentdata:any
  coursedata:any 
  semesterdata:any 
  teacherdata:any 
  dataafter:any
  ngOnInit(): void {
    this.get_department()
    this.get_course()
    this.get_semester()
    this.get_teacher()
    this.addSubject.patchValue({'department_id':'Select Department'})
    this.addSubject.patchValue({'course_id':'Select Course'})
    this.addSubject.patchValue({'semester_id':'Select Semester'})
    this.addSubject.patchValue({'teacher_id':'Select Teacher'})
  }
  add_subject(){
    this.spinner.show()
    
    this.subjectservice.add_subject(this.addSubject.value).subscribe(
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
  filter_data(val:any){
    if(val['is_blocked'] == 'Unblocked'){
      return val
    }
  }
  get_department(){
    this.spinner.show()
    this.departmentservice.get_department().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
         //console.log(res.data)
         this.dataafter=res.data.filter(this.filter_data)
         this.departmentdata = this.dataafter
        
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
  get_course(){
    this.spinner.show()
    this.courseservice.get_course().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        this.dataafter=res.data.filter(this.filter_data)
        this.coursedata = this.dataafter
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
  get_semester(){
    this.spinner.show()
    this.semesterservice.get_semester().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        this.dataafter=res.data.filter(this.filter_data)
        this.semesterdata = this.dataafter
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
  get_teacher(){
    this.spinner.show()
    this.teacherservice.get_teacher().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        console.log(res.data)
        this.dataafter=res.data.filter(this.filter_data)
        this.teacherdata = this.dataafter
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

}
