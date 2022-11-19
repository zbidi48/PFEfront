import { Component, OnInit } from '@angular/core';
import {MeetingService} from "../../services/meeting.service";
import {HttpResponse} from "@angular/common/http";
import {IMeeting} from "../../models/IMeeting.model";

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {
 meetings:IMeeting[]=[];
  constructor(private meetingservice:MeetingService) { }

  ngOnInit(): void {
    this.meetingservice.getmeeting().subscribe((value:HttpResponse<IMeeting[]>) => {
      this.meetings=value.body
    })
    //console.log(this.meetings.length)
  }

}
