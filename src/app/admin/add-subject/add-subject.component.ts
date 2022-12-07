import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  addSubject={
    subid:'',
    subname:'',
    cou_name:'',
    class_name:'',
    dep_name:'',
    teach_name:''
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
  teachers = [
    {
      'id':1,
      'name':'ABC'
    },
    {
      'id':2,
      'name':'DEF'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
