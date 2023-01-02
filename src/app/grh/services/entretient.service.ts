import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {IEntretient} from "../models/IEntretient.model";
import {IMessageReponse} from "../models/messageReponse.model";

@Injectable({
  providedIn: 'root'
})
export class EntretientService {
  api_url=environment.server_url;
  constructor(private http: HttpClient) { }
  getentretient():Observable<HttpResponse<IEntretient[]>>
  {
    return this.http.get<IEntretient[]>(this.api_url+'/entretient/afficherentretient',
      {observe: 'response'})
  }
  addentretient(data:any): Observable<HttpResponse<IMessageReponse>>
  {
    return this.http.post<IMessageReponse>(this.api_url+'/entretient/ajouterentretient',data,
      {observe: 'response'})
  }
 updateentretient(id:number,data:any): Observable<HttpResponse<IMessageReponse>>
 {
   return this.http.put<IMessageReponse>(this.api_url+'/entretient/miseajourentrtient/'+id,data,
     {observe: 'response'})
 }
 getentretientdetail(id:number):Observable<HttpResponse<IEntretient>>
 {
   return this.http.get<IEntretient>(this.api_url+'/entretient/detailentretient/'+id,
     {observe: 'response'})
 }
deleteentretient(id:number):Observable<HttpResponse<IMessageReponse>>
{
  return this.http.delete<IMessageReponse>(this.api_url+'/entretient/supprimerentretient/'+id,
    {observe: 'response'})
}




getentretientbymail(email:string):Observable<HttpResponse<IEntretient[]>>
{
  return this.http.get<IEntretient[]>(this.api_url+'/entretient/afficherentreteintparmail/'+email,{observe:'response'})
}
statusentretient(id:number,status:string):Observable<HttpResponse<IMessageReponse>>
{
  return this.http.put<IMessageReponse>(this.api_url+'/entretient/statusentretient/'+id+"/"+status,null,
    {observe: 'response'})
}
searchentretient(key:string):Observable<HttpResponse<IEntretient[]>>
{
  return this.http.get<IEntretient[]>(this.api_url+'/entretient/chercherentretient/'+key,
    {observe: 'response'})
}

}
