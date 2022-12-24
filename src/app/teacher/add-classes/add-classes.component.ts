import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-classes',
  templateUrl: './add-classes.component.html',
  styleUrls: ['./add-classes.component.css']
})
export class AddClassesComponent implements OnInit {
  addClass={
    addclassname:'',
    addtitle:'',
    addlink:'',
    adddate:'',
    addtime:''
  }
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
