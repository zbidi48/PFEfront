import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {ILoginReponse} from "../models/loginReponse.model";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  message() :Observable<HttpResponse<string>> {
    return this.http.get<string>("http://127.0.0.1:8081/api/test/message", {observe: 'response'})
  }
}
