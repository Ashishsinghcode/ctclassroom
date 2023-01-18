import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-classes',
  templateUrl: './add-classes.component.html',
  styleUrls: ['./add-classes.component.css']
})
export class AddClassesComponent implements OnInit {
  addClass=new FormGroup({
    semester_id: new FormControl(),
    classname:new FormControl(),
    title:new FormControl(),
    link:new FormControl(),
    date:new FormControl(),
    time:new FormControl()
  })
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
  testtime(){
    console.log(this.addClass.value)
  }

}
