import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {
  Attendence={
    classname:'',
    attendence_status:'',
    
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
  constructor() { }

  ngOnInit(): void {
  }

}
