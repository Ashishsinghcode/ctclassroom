import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/shared/admin/admin.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  addDepartment={
    department_id:'',
    department_name:''
  }

  constructor(private toastr : ToastrService,private spinner : NgxSpinnerService,private router : Router, private adminservice : AdminService ) { }

  ngOnInit(): void {
  }
add_department(){
  this.spinner.show()
  this.adminservice.add_department(this.addDepartment).subscribe(
    (res:any)=>{
      this.spinner.hide()
      if(res.success == true){
        this.toastr.success('Success',res.msg)
        
      }else{
        this.toastr.error('Failed',res.msg)
      }
      
    },
    err=>{
      this.spinner.hide()
  }
  )
}
}
