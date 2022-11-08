import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StorageService} from "../../services/storage.service";
import {NotedefraieService} from "../../services/notedefraie.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {IMessageReponse} from "../../models/messageReponse.model";

@Component({
  selector: 'app-addnotedefraie',
  templateUrl: './addnotedefraie.component.html',
  styleUrls: ['./addnotedefraie.component.scss']
})
export class AddnotedefraieComponent implements OnInit {
  notedefraieaddform: FormGroup = this.fb.group({

    description: ['', Validators.required],
    fraie:['',Validators.required],
    employee_id:[this.storageservice.getId(),Validators.required]
  })
  formSubmitted:boolean=false;
  message="Ajout avec success!";
  showMsg:boolean = false;
  has_error:boolean = false;
  error_message:string ='';
  constructor(private fb: FormBuilder,
              private storageservice:StorageService,
              private notedefraiservice:NotedefraieService) { }

  ngOnInit(): void {
  }
addnotedefraie():void
{
  //console.log(this.notedefraieaddform.value)
  this.formSubmitted = true;
  if (this.notedefraieaddform.valid)
  {
    this.notedefraiservice.addnotedefraie(this.notedefraieaddform.value).subscribe(
      (value:HttpResponse<IMessageReponse>) => {
        this.showMsg = true;
        this.notedefraieaddform.reset(true);

      },(error: HttpErrorResponse)=>{
        this.showMsg = false;
        this.has_error = true;
        this.error_message = error.message

      }
    )
  }

}
}
