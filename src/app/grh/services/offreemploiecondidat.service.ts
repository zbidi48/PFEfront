import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IOffrecondidat} from "../models/IOffrecondidat.model";
import {IMessageReponse} from "../models/messageReponse.model";


@Injectable({
  providedIn: 'root'
})
export class OffreemploiecondidatService {
  api_url=environment.server_url;
  constructor(private http: HttpClient) { }
  getoffrecondidat():Observable<HttpResponse<IOffrecondidat[]>>
  {
    return this.http.get<IOffrecondidat[]>(this.api_url+'/inscritoffre/afficherinscripoffre/',
      {observe: 'response'})
  }
  addoffrecondidat(idoffe:number,idcondidat:number): Observable<HttpResponse<IMessageReponse>>
  {
    return  this.http.post<IMessageReponse>(this.api_url+'/inscritoffre/postuleroffre/'+idoffe+"/"+idcondidat,
      null,
      {observe: 'response'})
  }

  deleteoffrecondidat(id): Observable<HttpResponse<IMessageReponse>>
  {
    return  this.http.delete<IMessageReponse>(this.api_url+'/inscritoffre/supprimernscritoffre/'+id,
      {observe: 'response'})
  }

  Detailoffrecondidat(id):Observable<HttpResponse<IOffrecondidat>>
  {
    return this.http.get<IOffrecondidat>(this.api_url+'/inscritoffre/inscritoffredetail/'+id,
      {observe: 'response'})
  }



  statusinscritoffre(id:number,status:string):Observable<HttpResponse<IMessageReponse>>
  {
    return this.http.put<IMessageReponse>(this.api_url+'/inscritoffre/chagestatus/'+id+"/"+status,null,
      {observe: 'response'})
  }
  getinscritoffrebymail(mail:string):Observable<HttpResponse<IOffrecondidat[]>>
  {
    return this.http.get<IOffrecondidat[]>(this.api_url+'/inscritoffre/afficherinscroffreparmail/'
      +mail,{observe: 'response'})
  }
searchinscritoffre(query:string):Observable<HttpResponse<IOffrecondidat[]>>
{
  return this.http.get<IOffrecondidat[]>(this.api_url+'/inscritoffre/chercheroffrecondidat/'+query,
    {observe: 'response'} )
}

}
