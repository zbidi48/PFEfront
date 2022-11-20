import { Component, OnInit } from '@angular/core';
import {MeetingService} from "../../services/meeting.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {IMessageReponse} from "../../models/messageReponse.model";
import {IMeeting} from "../../models/IMeeting.model";
import Swal from "sweetalert2";

@Component({
  selector: 'app-editmeeting',
  templateUrl: './editmeeting.component.html',
  styleUrls: ['./editmeeting.component.scss']
})
export class EditmeetingComponent implements OnInit {
  editmetingform: FormGroup = this.fb.group({
    date:['', Validators.required],
    heure:['', Validators.required],
    lienmeet:['', Validators.required],
    typemeeting:['', Validators.required],
  })
  formSubmitted:boolean=false;
  message="mise ajour avec success!";
  showMsg:boolean = false;
  has_error:boolean = false;
  error_message:string ='';
  constructor(private meetingservice:MeetingService
              ,private fb:FormBuilder,
              private path:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.getdatabyid()
  }
editmeeting()
{
  this.formSubmitted=true
  if (this.editmetingform.valid)
  {
    // console.log(this.editmetingform.value)
    this.meetingservice.updatemeeting(this.path.snapshot.params.id,this.editmetingform.value)
      .subscribe((value:HttpResponse<IMessageReponse>) =>
        {
          this.editmetingform.reset(true);
          this.router.navigate(['/rh/meeting'])
        },(error: HttpErrorResponse)=>{
          this.showMsg = false;
          this.has_error = true;
          this.error_message = error.message
        }
      )
  }



}
getdatabyid():void
{
  this.meetingservice.detaillmeeting(this.path.snapshot.params.id).
  subscribe((value:HttpResponse<IMeeting>) =>
  {
    this.editmetingform.setValue({
      date:value.body.date,
      heure:value.body.heure,
      lienmeet:value.body.lienmeet,
      typemeeting:value.body.typemeeting

    })
  })
}
}
