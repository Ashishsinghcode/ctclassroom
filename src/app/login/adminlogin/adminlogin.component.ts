import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private toastr : ToastrService, private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show()
    this.toastr.success('Login successfully','success')
  }

}
