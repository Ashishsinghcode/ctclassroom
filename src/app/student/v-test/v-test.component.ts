import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TestService } from 'src/app/shared/test/test.service';

@Component({
  selector: 'app-v-test',
  templateUrl: './v-test.component.html',
  styleUrls: ['./v-test.component.css']
})
export class VTestComponent implements OnInit {

  constructor(private spinner : NgxSpinnerService, private testservice : TestService) { 
    
  }

  ngOnInit(): void {
    this.get_test()
    
  }
  testdata = []
  
  filter_data(val:any){
    
    if(val['semester_id'] == localStorage.getItem('semester_id')){
      return val
    }
  }

  get_test(){
    this.spinner.show()
    this.testservice.get_test().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        console.log(res.data)
        this.testdata = res.data
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
