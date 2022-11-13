import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {ICondidat} from "../models/ICondidat.model";

@Injectable({
  providedIn: 'root'
})
export class CondidatService {
  api_url=environment.server_url;
  constructor(private http: HttpClient) { }
  getcondidat():Observable<HttpResponse<ICondidat[]>>
{
  return  this.http.get<ICondidat[]>(this.api_url+'/condidats/affichercondidats',
    {observe: 'response'})
}
detaillcandidat(id:number):Observable<HttpResponse<ICondidat>>
{
  return this.http.get<ICondidat>(this.api_url+'/condidats/detaillecandidats/'+id,
    {observe: 'response'})
}
searchcandidat(nom:string,prenom:string):Observable<HttpResponse<ICondidat[]>>
{
  return this.http.post<ICondidat[]>(this.api_url+'/condidats/cherchercandidat/'+nom+"/"+prenom,null,
    {observe: 'response'})
}
}
