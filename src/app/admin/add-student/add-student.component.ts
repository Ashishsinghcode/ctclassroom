import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  addStudent={
    rollno:'',
    stuname:'',
    dep_name:'',
    cou_name:'',
    class_name:'',
    stuemail:'',
    stupassword:'',
    stucontact:''
  }
  departments = [
    {
      'id':1,
      'name':'CSE'
    },
    {
      'id':2,
      'name':'ECE'
    },
  ]
  courses = [
    {
      'id':1,
      'name':'BCA'
    },
    {
      'id':2,
      'name':'MCA'
    },
  ]
  classes = [
    {
      'id':1,
      'name':'BCA 1'
    },
    {
      'id':2,
      'name':'MCA 3'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
