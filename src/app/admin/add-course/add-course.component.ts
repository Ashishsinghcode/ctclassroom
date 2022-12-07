import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  addCourse={
    couid:'',
    couname:'',
    department:''
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
  constructor() { }

  ngOnInit(): void {
  }

}
