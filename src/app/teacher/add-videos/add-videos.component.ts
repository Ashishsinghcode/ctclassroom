import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-videos',
  templateUrl: './add-videos.component.html',
  styleUrls: ['./add-videos.component.css']
})
export class AddVideosComponent implements OnInit {
  addVideo={
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
