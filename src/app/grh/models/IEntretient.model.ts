import {Time} from "@angular/common";

export interface IEntretient{
   id?:number,
   date?:Date,
   heure?:Time,
   status?:string,
   nom?:string,
   prenom?:string,
   titreOffre?:string
}
