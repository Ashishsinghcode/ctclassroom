import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {
  addNotes={
    addtitle:'',
    adddescription:'',
    addfile:''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
