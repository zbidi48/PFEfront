import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {IMessageReponse} from "../models/messageReponse.model";

import {IFichdepaie} from "../models/IFichdepaie.model";

@Injectable({
  providedIn: 'root'
})
export class FichedepaieService {
  api_url=environment.server_url;
  constructor(private http: HttpClient) { }

  getfiche():Observable<HttpResponse<IFichdepaie[]>>
  {
    return this.http.get<IFichdepaie[]>(this.api_url+'/fichedepaie/affichageficheuser',
      {observe: 'response'})
  }
  getfichebyid(id):Observable<HttpResponse<IFichdepaie>>
  {
    return this.http.get<IFichdepaie>(this.api_url+'/fichedepaie/detailfiche/'+id,
      {observe: 'response'})
  }
  addfiche(data): Observable<HttpResponse<IMessageReponse>>
  {
    return this.http.post<IMessageReponse>(this.api_url+'/fichedepaie/ajouterfiche',
      data,{observe:'response'})
  }
  updatefiche(data,id):Observable<HttpResponse<IMessageReponse>>
  {
    return this.http.put<IMessageReponse>(this.api_url+'/fichedepaie/miseajourfiche/'+id,
      data,{observe:'response'})
  }
  deletefiche(id):Observable<HttpResponse<IMessageReponse>>
  {
   return  this.http.delete<IMessageReponse>(this.api_url+'/fichedepaie/supprimerfiche/'+id,
      {observe:'response'})
  }
  searchfiche(data):Observable<HttpResponse<IFichdepaie[]>>
  {
    return this.http.get<IFichdepaie[]>(this.api_url+'/fichedepaie/chercherfichedepaie/'+data,
      {observe:'response'} )
  }



}
