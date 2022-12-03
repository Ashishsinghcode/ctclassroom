import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  addTeacher={
    teachid:'',
    teachname:'',
    teachemail:'',
    teachqualification:'',
    teachcontact:'',
    teachpassword:''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
