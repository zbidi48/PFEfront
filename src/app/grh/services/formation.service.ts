import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMessageReponse} from "../models/messageReponse.model";
import {IFormation} from "../models/IFormation.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  api_url=environment.server_url;

  constructor(private http: HttpClient) { }
  addformation(formadata): Observable<HttpResponse<IMessageReponse>>
  {

    return this.http.post<IMessageReponse>(this.api_url+'/formation/ajouterformation',formadata,
      {observe: 'response'})
  }
  getformations(): Observable<HttpResponse<IFormation[]>>
  {
   return this.http.get<IFormation[]>(this.api_url+'/formation/listformation',
     {observe: 'response'})

  }
  getformationid(id):Observable<HttpResponse<IFormation>>
  {
    return this.http.get<IFormation>(this.api_url+'/formation/affformid/'+id,
      {observe: 'response'})
  }
  updateformation(formartiondata,id):Observable<HttpResponse<IMessageReponse>>
  {

    return this.http.put<IMessageReponse>(this.api_url+'/formation/miseajourformation/'+id,
      formartiondata,{observe: 'response'})

  }
  deleteformation(id):Observable<HttpResponse<IMessageReponse>>
  {
    return this.http.delete<IMessageReponse>(this.api_url+'/formation/deleteformation/'+id,
      {observe: 'response'})
  }
  chercherformation(query:string):Observable<HttpResponse<IFormation[]>>
  {
    return this.http.get<IFormation[]>(this.api_url+'/formation/listformation/'+query,
      {observe: 'response'})
  }

}
