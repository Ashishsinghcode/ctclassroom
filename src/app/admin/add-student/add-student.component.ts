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
    department:'',
    course:'',
    class:'',
    stuemail:'',
    stupassword:'',
    stucontact:''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
