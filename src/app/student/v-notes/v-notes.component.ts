import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotesService } from 'src/app/shared/notes/notes.service';

@Component({
  selector: 'app-v-notes',
  templateUrl: './v-notes.component.html',
  styleUrls: ['./v-notes.component.css']
})
export class VNotesComponent implements OnInit {
  fileurl:any
  dataafter:any
  semester_id:any
  constructor(private spinner : NgxSpinnerService, private notesservice : NotesService,private sanitizer : DomSanitizer,@Inject('fileurl') _fileurl :any) { 
    this.fileurl =_fileurl
  }
 
  ngOnInit(): void {
    this.get_notes()
    
  }
  notesdata = []

  getfileurl(filename:any){
    
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.fileurl+"notes/"+filename)
  }
  filter_data(val:any){
    
    if(val['semester_id'] == localStorage.getItem('semester_id')){
      return val
    }
  }
  get_notes(){
    this.spinner.show()
    this.notesservice.get_notes().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        // console.log(res)
        this.dataafter=res.data.filter(this.filter_data)
        this.notesdata = this.dataafter
      },
      error:(err:any)=>{
        this.spinner.hide()
        console.log(err)
      },
      complete:()=>{
        this.spinner.hide()
      }
    })
  }
}
