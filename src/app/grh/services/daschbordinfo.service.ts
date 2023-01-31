import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DaschbordinfoService {
  api_url=environment.server_url;
  constructor(private http: HttpClient) { }
  getnbrcandidat():Observable<HttpResponse<number>>
  {
    return this.http.get<number>(this.api_url+'/dashboard/nbrcondidat',{observe: 'response'})
  }
  getnbremply():Observable<HttpResponse<number>>
  {
    return this.http.get<number>(this.api_url+'/dashboard/nbremp',{observe: 'response'})
  }
  getnbrvisa():Observable<HttpResponse<number>>
  {
    return this.http.get<number>(this.api_url+'/dashboard/nbrvisa',{observe: 'response'})
  }
  getnbrformation():Observable<HttpResponse<number>>
  {
    return this.http.get<number>(this.api_url+'/dashboard/nbrformation',{observe: 'response'})
  }
}
