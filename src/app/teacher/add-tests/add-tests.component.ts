import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-tests',
  templateUrl: './add-tests.component.html',
  styleUrls: ['./add-tests.component.css']
})
export class AddTestsComponent implements OnInit {
  addTest={
    addclassname:'',
    addtitle:'',
    addlink:'',
    adddate:'',
    addfromtime:'',
    addtotime:''
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
