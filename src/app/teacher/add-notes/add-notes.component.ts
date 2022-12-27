import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {
  addNotes={
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
