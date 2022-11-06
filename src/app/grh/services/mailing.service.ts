import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MailingService {
  api_url=environment.server_url;
  constructor(private http: HttpClient) { }
  sendsucce(id:number):Observable<HttpResponse<string>>
  {
    return this.http.get<string>(this.api_url+'/mailsend/sendConfirmMessage/'+id,
      {observe: 'response'})
  }
  sendfailed(id:number):Observable<HttpResponse<string>>
  {
    return this.http.get<string>(this.api_url+'/mailsend/sendDenyMessage/'+id,
      {observe: 'response'})
  }
}
