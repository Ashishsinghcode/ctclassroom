import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {
  addClass={
    classid:'',
    classname:'',
    cou_name:'',
    dep_name:''
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
