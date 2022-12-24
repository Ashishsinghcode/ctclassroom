import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-videos',
  templateUrl: './add-videos.component.html',
  styleUrls: ['./add-videos.component.css']
})
export class AddVideosComponent implements OnInit {
  addVideo={
    addtitle:'',
    adddescription:'',
    addfile:''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
