import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-assignments',
  templateUrl: './add-assignments.component.html',
  styleUrls: ['./add-assignments.component.css']
})
export class AddAssignmentsComponent implements OnInit {
  addAssignment={
    addtitle:'',
    adddescription:'',
    addfile:''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
