import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {IVisa} from "../models/IVisa.model";
import {IMessageReponse} from "../models/messageReponse.model";



@Injectable({
  providedIn: 'root'
})
export class VisaService {
  api_url=environment.server_url;
  constructor(private http: HttpClient) { }
  getvisa():Observable<HttpResponse<IVisa[]>>
  {
    return this.http.get<IVisa[]>(this.api_url+'/visa/listvisas',{observe: 'response'})
  }
  addvisa(data:any) :Observable<HttpResponse<IMessageReponse>>
  {
    return this.http.post<IMessageReponse>(this.api_url+'/visa/ajoutervisa/',data,
      {observe: 'response'})
  }
  deletevisa(id:number):Observable<HttpResponse<IMessageReponse>>
  {
    return this.http.delete<IMessageReponse>(this.api_url+'/visa/supprimervisa/'+id,
      {observe: 'response'})
  }
  statusvisa(id:number,status: string):Observable<HttpResponse<IMessageReponse>>
  {
    return this.http.put<IMessageReponse>(this.api_url+'/visa/accordvisa/'+id+"/"+status,null,
      {observe: 'response'})
  }
  getvisabymail(email:string):Observable<HttpResponse<IVisa[]>>
  {
    return this.http.get<IVisa[]>(this.api_url+'/visa/affichervisaemployee/'+email,
      {observe: 'response'})
  }

}
