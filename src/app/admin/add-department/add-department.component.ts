import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  addDepartment={
    depid:'',
    depname:''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
