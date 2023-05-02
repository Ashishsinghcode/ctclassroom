import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ClassService } from 'src/app/shared/class/class.service';

@Component({
  selector: 'app-v-lecture',
  templateUrl: './v-lecture.component.html',
  styleUrls: ['./v-lecture.component.css']
})
export class VLectureComponent implements OnInit {


dataafter:any  
lecturedata:any
  constructor(private classservice : ClassService , private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
    this.get_class()
  }
  filter_data(val:any){
    
    if(val['semester_id'] == localStorage.getItem('semester_id')){
      return val
    }
  }

get_class(){
  this.spinner.show()
  this.classservice.get_lecture().subscribe({
    next:(res:any)=>{
      this.spinner.hide()
      // console.log(res)
      this.dataafter=res.data.filter(this.filter_data)
      this.lecturedata = this.dataafter
      
      
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
