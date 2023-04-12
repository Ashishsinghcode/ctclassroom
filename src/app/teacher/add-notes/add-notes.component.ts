import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { NotesService } from 'src/app/shared/notes/notes.service';
import { SemesterService } from 'src/app/shared/semester/semester.service';


@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {
  addNotes= new FormGroup({
    title:new FormControl(),
    description: new FormControl(),
    notes:new FormControl(),
    semester_id: new FormControl()
  })
  dataafter:any
  semesterdata:any
  constructor(private spinner : NgxSpinnerService, private toastr : ToastrService, private notesservice : NotesService, private semesterservice : SemesterService) { }

  ngOnInit(): void {
    this.get_semester()
  }
  photoname:any
  photo(event:any){
    // console.log(event.target.files)
    this.photoname = event.target.files[0]
    // this.addNotice.patchValue({'notice':event.target.files[0]})
  }
add_notes(){

    this.spinner.show()
    const data = new FormData()
    data.append('title',this.addNotes.value.title)
    data.append('description',this.addNotes.value.description)
    data.append('notes',this.photoname)
    data.append('semester_id',this.addNotes.value.semester_id)
    console.log(this.photoname)
    
    this.notesservice.add_notes(data).subscribe({
      next:(result:any)=>{
        
        this.spinner.hide()
        if(result.success)
        {
          this.toastr.success("Success",result.message)
        }
        else{
          this.toastr.error("Try again",result.message)
        }
      },
      error:(err:any)=>{
        this.spinner.hide()
        
        this.toastr.error("server error",err)

      },
      
    })
  }
  filter_data(val:any){
    if(val['is_blocked'] == 'Unblocked'){
      return val
    }
  }
  get_semester(){
    this.spinner.show()
    this.semesterservice.get_semester().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        this.dataafter=res.data.filter(this.filter_data)
        this.semesterdata = this.dataafter
       
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