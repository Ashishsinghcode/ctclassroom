import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SemesterService } from 'src/app/shared/semester/semester.service';
import { TestService } from 'src/app/shared/test/test.service';

@Component({
  selector: 'app-add-tests',
  templateUrl: './add-tests.component.html',
  styleUrls: ['./add-tests.component.css']
})
export class AddTestsComponent implements OnInit {
  addTest = new FormGroup({
    semester_id: new FormControl(),
    title: new FormControl(),
    description: new FormControl(),
    link: new FormControl(),
    date: new FormControl(),
    marks: new FormControl(),
    duration: new FormControl(),
  })

  semesterdata:any
  dataafter:any
  constructor(private spinner : NgxSpinnerService, private toastr : ToastrService, private testservice : TestService, private semesterservice : SemesterService) { }

  ngOnInit(): void {
    this.get_semester()
  }
  
add_test(){

    this.spinner.show()
    //console.log(this.addTest.value)
    this.testservice.add_test(this.addTest.value).subscribe(
      (result:any)=>{
        console.log(result)
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
