import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { NoticeService } from 'src/app/shared/notice/notice.service';

@Component({
  selector: 'app-disp-notice',
  templateUrl: './disp-notice.component.html',
  styleUrls: ['./disp-notice.component.css']
})
export class DispNoticeComponent implements OnInit {
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

}
