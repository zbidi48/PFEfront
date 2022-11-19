import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {IMeeting} from "../models/IMeeting.model";
import {IMessageReponse} from "../models/messageReponse.model";

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  api_url=environment.server_url;
  constructor(private http: HttpClient) { }
  getmeeting():Observable<HttpResponse<IMeeting[]>>
  {
    return this.http.get<IMeeting[]>(this.api_url+'/meeting/listmeeting',{observe: 'response'})
  }
  addmeetings(data:any):Observable<HttpResponse<IMessageReponse>>
  {
    return this.http.post<IMessageReponse>(this.api_url+'/meeting/ajoutmeet/',data,{observe: 'response'})
  }
  updatemeeting(id:number,data:any):Observable<HttpResponse<IMessageReponse>>
  {
    return this.http.put<IMessageReponse>(this.api_url+'/meeting/miseajourmeeting/'+id,data,
      {observe: 'response'})
  }
  detaillmeeting(id:number):Observable<HttpResponse<IMeeting>>
  {
    return this.http.get<IMeeting>(this.api_url+'/meeting/detaillemeeting/'+id,{observe: 'response'})
  }
 statusmeeting(id:number,status:string):Observable<HttpResponse<IMessageReponse>>
 {
   return this.http.put<IMessageReponse>(this.api_url+'/meeting/changestatusmeet/'+id+"/"+status
     ,null,{observe: 'response'})
 }
}
