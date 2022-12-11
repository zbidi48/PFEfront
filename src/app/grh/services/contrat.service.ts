import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IContrat} from "../models/IContrat.model";
import {IMessageReponse} from "../models/messageReponse.model";


@Injectable({
  providedIn: 'root'
})
export class ContratService {
  api_url=environment.server_url;
  constructor(private http: HttpClient) { }

  getcontrats():Observable<HttpResponse<IContrat[]>>
  {
    return  this.http.get<IContrat[]>(this.api_url+'/contrat/listcontrat/',{observe: 'response'})
  }
  addcontrat(data):Observable<HttpResponse<IMessageReponse>>
  {
    return  this.http.post<IMessageReponse>(this.api_url+'/contrat/ajoutercontrat/',data,{observe: 'response'})
  }
  getcontratbyid(id:number):Observable<HttpResponse<IContrat>>
  {
    return this.http.get<IContrat>(this.api_url+'/contrat/detaillcontrat/'+id,{observe: 'response'})
  }
  updatecontrat(data,id):Observable<HttpResponse<IMessageReponse>>
  {
    return  this.http.put<IMessageReponse>(this.api_url+'/contrat/miseajourcontrat/'+id,data,
      {observe: 'response'})
  }
  deletecontrat(id):Observable<HttpResponse<IMessageReponse>>
  {
    return this.http.delete<IMessageReponse>(this.api_url + '/contrat/supprimercontrat/' + id, {observe: 'response'});
  }
  searchcontratbycode(code:string):Observable<HttpResponse<IContrat[]>>
  {
    return this.http.get<IContrat[]>(this.api_url+'/contrat/cherchercontrat/'+code,
      {observe: 'response'})
  }
searchcontratbyjobid(data:any):Observable<HttpResponse<IContrat[]>>
{
  return this.http.get<IContrat[]>(this.api_url+'/contrat/cherchercontratparjobid/'+data,
    {observe: 'response'} )
}
searchcontratbyfirstnamelastname(nom:string,prenom:string):Observable<HttpResponse<IContrat[]>>
{
  return this.http.post<IContrat[]>(this.api_url+'/contrat/chercherparnometprenom/'+nom+"/"
  +prenom,null,{observe: 'response'})
}
getcontratbyemployid(emplid:number):Observable<HttpResponse<IContrat[]>>
{
  return this.http.get<IContrat[]>(this.api_url+'/contrat/affichercontratparemployeeid/'+emplid,
    {observe: 'response'})
}
exportcontratpdf(id:number,emplid:number):Observable<HttpResponse<IMessageReponse>>
{
  return this.http.post<IMessageReponse>(this.api_url+'/contrat/exportcontratpdf/'+id+"/"+emplid,null,
    {observe: 'response'})
}

}
