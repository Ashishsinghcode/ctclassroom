import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { NoticeService } from 'src/app/shared/notice/notice.service';

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
  })

  constructor(private spinner : NgxSpinnerService, private toastr : ToastrService, private noticeservice : NoticeService) { }

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
    console.log(data)
    this.noticeservice.add_notice(data).subscribe({
      next:(result:any)=>{
        this.spinner.hide()
        if(result.success)
        {
          this.toastr.success("Success",result.message)
        }
        else{
          this.toastr.error("Try again",result.response.msg)
        }
      },
      error:(err:any)=>{
        this.spinner.hide()
        
        this.toastr.error("server error",err)

      },
      
    })
  }
}

