import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { VideosService } from 'src/app/shared/videos/videos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-m-videos',
  templateUrl: './m-videos.component.html',
  styleUrls: ['./m-videos.component.css']
})
export class MVideosComponent implements OnInit {
  deletevideo = new FormGroup({
    _id : new FormControl()
    })

  constructor(private spinner : NgxSpinnerService, private videoservice : VideosService) { 
    
  }

  ngOnInit(): void {
    this.get_video()
    
  }
  videodata = []

  get_video(){
    this.spinner.show()
    this.videoservice.get_video().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        console.log(res.data)
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

  delete_video(form:any){
    this.deletevideo.patchValue({'_id':form})
    
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
        this.videoservice.delete_video(this.deletevideo.value).subscribe({
          next:(result:any)=>{
            
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.get_video()
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
