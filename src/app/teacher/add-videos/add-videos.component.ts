import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SemesterService } from 'src/app/shared/semester/semester.service';
import { TestService } from 'src/app/shared/test/test.service';
import { VideosService } from 'src/app/shared/videos/videos.service';

@Component({
  selector: 'app-add-videos',
  templateUrl: './add-videos.component.html',
  styleUrls: ['./add-videos.component.css']
})
export class AddVideosComponent implements OnInit {
  addVideo = new FormGroup({
    semester_id: new FormControl(),
    title: new FormControl(),
    description: new FormControl(),
    link: new FormControl(),
  })
  dataafter:any
  semesterdata:any
  a:any
  b:any
  c:any
  link:any
  constructor(private spinner : NgxSpinnerService, private toastr : ToastrService, private videoservice : VideosService, private semesterservice : SemesterService) { }

  ngOnInit(): void {
    this.get_semester()
  }
  
add_video(){
    this.spinner.show()
    this.a=this.addVideo.value.link.replace('.','')
    this.b=this.a.slice(0,15)
    this.c=this.a.slice(15)
    this.link=this.b+'.com/embed'+this.c
    this.addVideo.patchValue({'link':this.link})
    console.log(this.addVideo.value)
    this.videoservice.add_video(this.addVideo.value).subscribe(
      (result:any)=>{
        
        this.spinner.hide()
        if(result.success == true)
        {
          this.toastr.success("Success",result.message)
        }
        else{
          this.toastr.error("Try again",result.message)
        }
      },
      err=>{
        this.spinner.hide()
        this.toastr.error("server error",err)
      },
      
    )
  }
  filter_data(val:any){
    if(val['is_blocked'] == 'Unblocked'){
      return val
    }
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

}
