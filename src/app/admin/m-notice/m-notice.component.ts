import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { NoticeService } from 'src/app/shared/notice/notice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-m-notice',
  templateUrl: './m-notice.component.html',
  styleUrls: ['./m-notice.component.css']
})
export class MNoticeComponent implements OnInit {
  deleteNotice = new FormGroup({
    _id : new FormControl()
    })

    fileurl:any
  constructor(private spinner : NgxSpinnerService, private noticeservice : NoticeService,private sanitizer : DomSanitizer,@Inject('fileurl') _fileurl :any) { 
    this.fileurl =_fileurl
  }

  ngOnInit(): void {
    this.get_notice()
    
  }
  noticedata = []

  getfileurl(filename:any){
    
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.fileurl+"notice/"+filename)
  }

  get_notice(){
    this.spinner.show()
    this.noticeservice.get_notice().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        // console.log(res)
        this.noticedata = res.data
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

  delete_notice(form:any){
    this.deleteNotice.patchValue({'_id':form})
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => {
      if (result.isConfirmed) {
        this.noticeservice.delete_notice(this.deleteNotice.value).subscribe({
          next:(result:any)=>{
            
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.get_notice()
          },
          error:(err:any)=>{
            Swal.fire(
              'Try Again!',
              'Your file has not been deleted.',
              'error'
            )
          }
        })
      }
    })
  }

}
