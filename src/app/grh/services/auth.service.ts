import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {ILoginReponse} from "../models/loginReponse.model";
import {StorageService} from "./storage.service";
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from "@angular/router";
import {IMessageReponse} from "../models/messageReponse.model";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private storageService: StorageService,
              private jwtHelper: JwtHelperService,
              private router: Router) { }

  login(data: any):Observable<HttpResponse<ILoginReponse>> {
    return this.http.post<ILoginReponse>("http://127.0.0.1:8081/api/auth/signin", data, {observe: 'response'})
  }
  register(data:any):Observable<HttpResponse<IMessageReponse>>
  {
    return this.http.post<IMessageReponse>("http://127.0.0.1:8081/api/auth/condidat/signup",
      data,{observe: 'response'})

  }

  isAuthenticated(): boolean {
    const token = this.storageService.getToken();
    if(token) {
      return  !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }



  logout(): void {
    this.storageService.clearStorage();
    this.router.navigateByUrl('/auth/login');
  }


}
