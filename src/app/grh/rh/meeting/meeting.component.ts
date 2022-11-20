import { Component, OnInit } from '@angular/core';
import {MeetingService} from "../../services/meeting.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {IMeeting} from "../../models/IMeeting.model";
import Swal from "sweetalert2";
import {IMessageReponse} from "../../models/messageReponse.model";

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {
 meetings:IMeeting[]=[];
  msg:string = '';
  constructor(private meetingservice:MeetingService) { }

  ngOnInit(): void {
    this.meetingservice.getmeeting().subscribe((value:HttpResponse<IMeeting[]>) => {
      this.meetings=value.body
    })
    //console.log(this.meetings.length)
  }

statusmeeting(id:number,status:string)
{
  Swal.fire({
    title:'Êtes-vous sûr '+status+' le meeting?',
    showCancelButton:true,
    confirmButtonText: 'ok',
  }).then((result) =>{
    if(result.isConfirmed) {
      this.meetingservice.statusmeeting(id, status).subscribe({
        next:(msg:HttpResponse<IMessageReponse>)=> this.msg=msg.body.message,
        error:(err:HttpErrorResponse) => {
          //Swal.fire('erreur ','','error')
          this.msg = ''
        },
        complete:() => {
          Swal.fire(this.msg,'','success')
          this.meetingservice.getmeeting().subscribe((value:HttpResponse<IMeeting[]>) => {
            this.meetings=value.body
          })
        }
      })

    }
  })
}
}
