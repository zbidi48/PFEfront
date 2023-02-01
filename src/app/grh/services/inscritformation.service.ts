import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMessageReponse} from "../models/messageReponse.model";
import {Iinscritformation} from "../models/Iinscritformation.model";

@Injectable({
  providedIn: 'root'
})
export class InscritformationService {
  api_url=environment.server_url;
  constructor(private http: HttpClient) { }

  getinscritformation():Observable<HttpResponse<Iinscritformation[]>>
  {
    return this.http.get<Iinscritformation[]>(this.api_url+'/inscritformation/afficherinscritformation',
      {observe: 'response'})
  }
  deleteinscritformation(id:number):Observable<HttpResponse<IMessageReponse>>
  {
    return this.http.delete<IMessageReponse>(this.api_url+'/inscritformation/supprimerinscritformation/'+id,
      {observe: 'response'})
  }
  inscritformation(idempl:number,idformation:number):Observable<HttpResponse<Iinscritformation[]>>
  {
    return  this.http.post<Iinscritformation[]>(this.api_url+'/inscritformation/inscritformation/'+idempl+"/"+idformation,
      null,{observe: 'response'})
  }
  getinscritformationbyid(id:number):Observable<HttpResponse<Iinscritformation>>
  {
    return this.http.get<Iinscritformation>(this.api_url+'/inscritformation/deatilleinscrit/'+id,
      {observe: 'response'} )
  }

  satatusinscritformation(id:number,status:string):Observable<HttpResponse<IMessageReponse>>
  {
    return this.http.put<IMessageReponse>(this.api_url+'/inscritformation/changerstatusinscritformation/'
      +id+"/"+status,null,{observe: 'response'})
  }
getinsccritbyemployeeid(emplid:number):Observable<HttpResponse<Iinscritformation[]>>
{
  return this.http.get<Iinscritformation[]>(this.api_url+'/inscritformation/afficherinscritparemplyeeid/'+emplid,
    {observe: 'response'})

}

saveEvaluation(data: any):Observable<HttpResponse<IMessageReponse>> {
    return this.http.post<IMessageReponse>(this.api_url+'/evaluation/add', data, {observe: 'response'})
}
getTotalFormationBien():Observable<HttpResponse<number>>{
    return  this.http.get<number>(this.api_url+'/evaluation/totalbien', {observe: 'response'});
}

  getTotalFormationAssezBien():Observable<HttpResponse<number>>{
    return  this.http.get<number>(this.api_url+'/evaluation/totalassezbien', {observe: 'response'});
  }
  getTotalFormationPasTellemnt():Observable<HttpResponse<number>>{
    return  this.http.get<number>(this.api_url+'/evaluation/totalpastellement', {observe: 'response'});
  }
  Searchinscrit(key:string):Observable<HttpResponse<Iinscritformation[]>>
  {
    return this.http.get<Iinscritformation[]>(this.api_url+'/inscritformation/chercherinscrit/'+key,{observe: 'response'})
  }
}
