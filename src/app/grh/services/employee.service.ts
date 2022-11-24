import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {IEmployee} from "../models/IEmployee.model";
import {Observable} from "rxjs";
import {IMessageReponse} from "../models/messageReponse.model";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  api_url=environment.server_url;
  constructor(private http: HttpClient) { }
  getemployee():Observable<HttpResponse<IEmployee[]>>
  {
    return this.http.get<IEmployee[]>(this.api_url+'/employee/listemployee',{observe: 'response'})
  }
  addemployee(data):Observable<HttpResponse<IMessageReponse>>
  {
    return this.http.post<IMessageReponse>(this.api_url+'/employee/crieremployee',data,{observe: 'response'})
  }
  updateemployee(id:number,data:any):Observable<HttpResponse<IMessageReponse>>
  {
    return this.http.put<IMessageReponse>(this.api_url+'/employee/miseajouemplyee/'+id,data,{observe: 'response'})
  }
  deleteemployee(id):Observable<HttpResponse<IMessageReponse>>
  {
    return  this.http.delete<IMessageReponse>(this.api_url+'/employee/effaceremployee/'+id,{observe: 'response'})
  }
  getemployeebyid(id):Observable<HttpResponse<IEmployee>>
  {
    return this.http.get<IEmployee>(this.api_url+'/employee/detailempl/'+id,{observe: 'response'})
  }
  searchemployee(jobid:string):Observable<HttpResponse<IEmployee[]>>
  {
    return this.http.get<IEmployee[]>(this.api_url+'/employee/chercheremployee/'+jobid,{observe: 'response'})
  }


}
