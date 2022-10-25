import { Injectable } from '@angular/core';

const USEREMAIL_KEY = "user_email";
const TOKEN_KEY = "token";
const userid_Key="user_id";


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string {
    return  localStorage.getItem(TOKEN_KEY);
  }


  public saveId(id):void
  {
    localStorage.removeItem(userid_Key);
    localStorage.setItem(userid_Key,id);
  }
 public getId():any
 {
   return  localStorage.getItem(userid_Key);
 }

 public saveEmail(email: string): void {
    localStorage.removeItem(USEREMAIL_KEY);
    localStorage.setItem(USEREMAIL_KEY, email);
  }

  public getEmail(): string | null {
    return  localStorage.getItem(USEREMAIL_KEY)
  }

  public clearStorage(): void {
    localStorage.clear();
  }


}
