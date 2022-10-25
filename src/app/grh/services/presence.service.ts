import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {IMessageReponse} from "../models/messageReponse.model";

import {IPresence} from "../models/IPresence.model";

@Injectable({
  providedIn: 'root'
})
export class PresenceService {
  api_url=environment.server_url;
  constructor(private http: HttpClient) { }
  addpresence(data): Observable<HttpResponse<IMessageReponse>>
  {
    return  this.http.post<IMessageReponse>(this.api_url+'/presence/ajouterpresence/',data,
      {observe: 'response'})
  }
  getpresence():Observable<HttpResponse<IPresence[]>>
  {
    return this.http.get<IPresence[]>(this.api_url+'/presence/afficherpresence',
      {observe: 'response'})
  }
  updatepresence(data,id):Observable<HttpResponse<IMessageReponse>>
  {
    return this.http.put<IMessageReponse>(this.api_url+'/presence/modifierpresence/'+id,
      data,{observe: 'response'})
  }
  deletepresence(id):Observable<HttpResponse<IMessageReponse>>
  {
    return this.http.delete<IMessageReponse>(this.api_url+'/presence/supprimerpresence/'+id,
      {observe:'response'})
  }
  getpresencebyid(id):Observable<HttpResponse<IPresence>>
  {
    return  this.http.get<IPresence>(this.api_url+'/presence/detailpresence/'+id,
      {observe:'response'})
  }
  getpresencebyuser(userid):Observable<HttpResponse<IPresence>>
  {
    return this.http.get<IPresence>(this.api_url+'/presence/detailpresence/'+userid,
      {observe:'response'})
  }
  getpresencebyusermail(email):Observable<HttpResponse<IPresence[]>>
  {
    return this.http.get<IPresence[]>(this.api_url+'/presence/afficherpresenceparusermail/'+email,
      {observe:'response'})
  }

}
