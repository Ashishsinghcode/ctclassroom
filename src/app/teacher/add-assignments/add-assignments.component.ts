import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-assignments',
  templateUrl: './add-assignments.component.html',
  styleUrls: ['./add-assignments.component.css']
})
export class AddAssignmentsComponent implements OnInit {
  addAssignment={
    classname:'',
    addtitle:'',
    adddescription:'',
    addfile:''
  }
  constructor() { }
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
  ngOnInit(): void {
  }

}
