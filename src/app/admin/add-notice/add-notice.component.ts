import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs';
import { NoticeService } from 'src/app/shared/notice/notice.service';
import { StudentService } from 'src/app/shared/student/student.service';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.css']
})
export class AddNoticeComponent implements OnInit {
  addNotice= new FormGroup({
    title:new FormControl(),
    description: new FormControl(),
    notice:new FormControl(),
    email: new FormControl()
  })
  studentdata:any
  constructor(private spinner : NgxSpinnerService, private toastr : ToastrService, private noticeservice : NoticeService, private studentservice:StudentService ) { }

  ngOnInit(): void {
  }
  photoname:any
  photo(event:any){
    // console.log(event.target.files)
    this.photoname = event.target.files[0]
    // this.addNotice.patchValue({'notice':event.target.files[0]})
  }
add_notice(){

  
    this.spinner.show()
    const data = new FormData()
    data.append('title',this.addNotice.value.title)
    data.append('description',this.addNotice.value.description)
    data.append('notice',this.photoname)
    this.noticeservice.add_notice(data).subscribe({
      next:(result:any)=>{
        this.spinner.hide()
        if(result.success)
        {
          this.toastr.success("Success",result.message)
        }
        else{
          this.toastr.error("Try again",result.message)
        }
      },
      error:(err:any)=>{
        this.spinner.hide()
        
        this.toastr.error("server error",err)

      },
      
    })
  }
  filter_data(val:any){
    if(val['is_blocked'] == 'Unblocked'){
      return val
    }
  }
  send_mail(){
    this.studentservice.get_student().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        this.studentdata = res.data
        this.studentdata=this.studentdata.filter(this.filter_data)
        this.studentdata=this.studentdata.map((email:any)=>{
            return email.email
             })
         

        const mail_data = new FormData()
        mail_data.append('title',this.addNotice.value.title)
        mail_data.append('description',this.addNotice.value.description)
        mail_data.append('notice',this.photoname)
        mail_data.append('email',this.studentdata)
        //console.log(this.addNotice.value)
        this.noticeservice.sent_mail(mail_data).subscribe({
          next:(result:any)=>{
            if(result.success)
            {
              this.toastr.success("Success",result.message)
            }
            else{
              this.toastr.error("Try again",result.message)
            }
          },
          error:(err:any)=>{
            this.spinner.hide()
            
            this.toastr.error("server error",err)
          },
          
        })
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

