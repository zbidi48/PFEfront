import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMessageReponse} from "../models/messageReponse.model";
import {IOffreemploie} from "../models/IOffreemploie.model";


@Injectable({
  providedIn: 'root'
})
export class OffreemploieService {
  api_url=environment.server_url;
  constructor(private http: HttpClient) { }
  addoffre(data):Observable<HttpResponse<IMessageReponse>>
  {
    return  this.http.post<IMessageReponse>(this.api_url+'/offreemploie/ajouteroffre',
      data,{observe: 'response'})
  }
  getoffre(): Observable<HttpResponse<IOffreemploie[]>>
  {
    return  this.http.get<IOffreemploie[]>(this.api_url+'/offreemploie/afficheroffre',
      {observe: 'response'})
  }
  updateoffre(data,id):Observable<HttpResponse<IMessageReponse>>
  {
     return  this.http.put<IMessageReponse>(this.api_url+'/offreemploie/miseajouroffre/'+id,data,
      {observe: 'response'})
  }
  deleteoffre(id):Observable<HttpResponse<IMessageReponse>>
  {
    return  this.http.delete<IMessageReponse>(this.api_url+'/offreemploie/effaceroffre/'+id,
      {observe: 'response'})
  }
  getodffrebyid(id):Observable<HttpResponse<IOffreemploie>>
  {
    return this.http.get<IOffreemploie>(this.api_url+'/offreemploie/detailoffre/'+id,
      {observe: 'response'}
    )
  }
  searchoffre(data):Observable<HttpResponse<IOffreemploie[]>>
  {
    return this.http.get<IOffreemploie[]>(this.api_url+'/offreemploie/chercheroffrepartype/'+data,
      {observe: 'response'})

  }
}
