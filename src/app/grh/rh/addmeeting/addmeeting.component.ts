import { Component, OnInit } from '@angular/core';
import {MeetingService} from "../../services/meeting.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {IMessageReponse} from "../../models/messageReponse.model";

@Component({
  selector: 'app-addmeeting',
  templateUrl: './addmeeting.component.html',
  styleUrls: ['./addmeeting.component.scss']
})
export class AddmeetingComponent implements OnInit {
 meetingaddform: FormGroup = this.fb.group({
   date:['',Validators.required],
   heure: ['', Validators.required],
   lienmeet: ['', Validators.required],
   typemeeting: ['', Validators.required],
 })
  constructor(private meetingservice:MeetingService,
              private fb:FormBuilder) { }
  formSubmitted: boolean = false;
  message="Ajout avec success!";
  showMsg:boolean = false;
  has_error:boolean = false;
  error_message:string ='';

  ngOnInit(): void {
  }
  /*
  composant pas términe
   */
addmeet()
{
  this.formSubmitted=true;
  if (this.meetingaddform.valid)
  {
    this.meetingservice.addmeetings(this.meetingaddform.value).
    subscribe((value:HttpResponse<IMessageReponse>) => {
      this.showMsg = true;
      this.meetingaddform.reset(true);
    },(error: HttpErrorResponse)=>{
      this.showMsg = false;
      this.has_error = true;
      this.error_message = error.message
    })
  }
}
}
