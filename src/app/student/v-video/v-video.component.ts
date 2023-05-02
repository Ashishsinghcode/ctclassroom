import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { VideosService } from 'src/app/shared/videos/videos.service';

@Component({
  selector: 'app-v-video',
  templateUrl: './v-video.component.html',
  styleUrls: ['./v-video.component.css']
})
export class VVideoComponent implements OnInit {

  constructor(private spinner : NgxSpinnerService, private videoservice : VideosService) { 
    
  }

  ngOnInit(): void {
    this.get_video()
    
  }
  videodata = []
  filter_data(val:any){
    
    if(val['semester_id'] == localStorage.getItem('semester_id')){
      return val
    }
  }
  get_video(){
    this.spinner.show()
    this.videoservice.get_video().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
       
        this.videodata = res.data
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
