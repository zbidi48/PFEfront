import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

import {IConge} from "../models/IConge.model";
import {IMessageReponse} from "../models/messageReponse.model";

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  api_url=environment.server_url;
  constructor(private http: HttpClient) { }
  getconge():Observable<HttpResponse<IConge[]>>
  {
    return  this.http.get<IConge[]>(this.api_url+'/Conge/listconge',{observe: 'response'})
  }
  addconge(data):Observable<HttpResponse<IMessageReponse>>
  {
    return  this.http.post<IMessageReponse>(this.api_url+'/Conge/ajoutedemandeconge',data
      ,{observe: 'response'})
  }
  updateconge(id,data):Observable<HttpResponse<IMessageReponse>>
  {
    return this.http.put<IMessageReponse>(this.api_url+'/Conge/miseajourconge/'+id,data
      ,{observe: 'response'})
  }

  deleteconge(id):Observable<HttpResponse<IMessageReponse>>
  {
     return this.http.delete<IMessageReponse>(this.api_url+'/Conge/supprimerconge/'+id,
       {observe: 'response'})
  }
  Detailconge(id):Observable<HttpResponse<IConge>>
  {
    return this.http.get<IConge>(this.api_url+'/Conge/detailconge/'+id,
      {observe: 'response'})
  }
  getcongebymail(mail):Observable<HttpResponse<IConge[]>>
  {
    return this.http.get<IConge[]>(this.api_url+'/Conge/affichercongeparmail/'+mail,
      {observe: 'response'})
  }

  searchconge(data):Observable<HttpResponse<IConge[]>>
  {
    return this.http.get<IConge[]>(this.api_url+'/Conge/chercherdemandeconge/'+data,
      {observe: 'response'})
  }
  statusconge(data,id):Observable<HttpResponse<IMessageReponse>>
  {
    return this.http.put<IMessageReponse>(this.api_url+'/Conge/statusconge/'+id,data, {observe: 'response'})
  }


}
