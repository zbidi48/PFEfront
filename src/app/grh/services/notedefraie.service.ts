import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

import {INotedefraie} from "../models/INotedefraie.model";
import {IMessageReponse} from "../models/messageReponse.model";

@Injectable({
  providedIn: 'root'
})
export class NotedefraieService {
  api_url=environment.server_url;
  constructor(private http: HttpClient) { }
  getnotedefraie(): Observable<HttpResponse<INotedefraie[]>>
  {
    return this.http.get<INotedefraie[]>(this.api_url+'/notedefraie/listnotedefraie',
      {observe: 'response'})
  }
  addnotedefraie(date): Observable<HttpResponse<IMessageReponse>>
  {
    return this.http.post<IMessageReponse>(this.api_url+'/notedefraie/ajouternotedefraie',date,
      {observe: 'response'})
  }
  updatenotedefraie(id,data):Observable<HttpResponse<IMessageReponse>>
  {
   return  this.http.put<IMessageReponse>(this.api_url+'/notedefraie/miseajournotedefraie/'+id,data,
     {observe: 'response'})
  }
  detailnotedefraie(id):Observable<HttpResponse<INotedefraie>>
  {
    return this.http.get<INotedefraie>(this.api_url+'/notedefraie/detaillnotedefraie/'+id,
      {observe: 'response'})
  }
  deletenotedefraie(id):Observable<HttpResponse<IMessageReponse>>
  {
    return this.http.delete<IMessageReponse>(this.api_url+'/notedefraie/supprimernotedefraie/'+id,
      {observe: 'response'})
  }
  searchnotedefraie(data): Observable<HttpResponse<INotedefraie[]>>
  {
    return this.http.get<INotedefraie[]>(this.api_url+'/notedefraie/cherchernotedefraie/'+data,
      {observe: 'response'})
  }
  searchbylastnamefirstname(nom:string,prenom:string): Observable<HttpResponse<INotedefraie[]>>
  {
    return this.http.post<INotedefraie[]>(this.api_url+'/notedefraie/chercherparnometprenom/'+nom+"/"+
    prenom,null,{observe: 'response'})
  }
  getnoteoffrebyemail(email):Observable<HttpResponse<INotedefraie[]>>
  {
    return this.http.get<INotedefraie[]>(this.api_url+'/notedefraie/affichernotedefraieparmail/'+email,
      {observe: 'response'} )
  }

}
