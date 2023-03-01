import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotesService } from 'src/app/shared/notes/notes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-m-notes',
  templateUrl: './m-notes.component.html',
  styleUrls: ['./m-notes.component.css']
})
export class MNotesComponent implements OnInit {
  deleteNotes = new FormGroup({
    _id : new FormControl()
    })

    fileurl:any
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

  get_notes(){
    this.spinner.show()
    this.notesservice.get_notes().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        // console.log(res)
        this.notesdata = res.data
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

  delete_notes(form:any){
    this.deleteNotes.patchValue({'_id':form})
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => {
      if (result.isConfirmed) {
        this.notesservice.delete_notes(this.deleteNotes.value).subscribe({
          next:(result:any)=>{
            
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.get_notes()
          },
          error:(err:any)=>{
            Swal.fire(
              'Try Again!',
              'Your file has not been deleted.',
              'error'
            )
          }
        })
      }
    })
  }
}
