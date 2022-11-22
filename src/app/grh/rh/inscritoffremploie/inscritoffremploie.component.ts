import { Component, OnInit } from '@angular/core';
import {OffreemploiecondidatService} from "../../services/offreemploiecondidat.service";
import {IOffrecondidat} from "../../models/IOffrecondidat.model";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import Swal from "sweetalert2";
import {IMessageReponse} from "../../models/messageReponse.model";
import {Iinscritformation} from "../../models/Iinscritformation.model";

@Component({
  selector: 'app-inscritoffremploie',
  templateUrl: './inscritoffremploie.component.html',
  styleUrls: ['./inscritoffremploie.component.scss']
})
export class InscritoffremploieComponent implements OnInit {
  inscritoffreemploies:IOffrecondidat[]=[];
  msg:string='';
  constructor(private inscritoffreemploieservice:OffreemploiecondidatService) { }

  ngOnInit(): void {
    this.inscritoffreemploieservice.getoffrecondidat().
    subscribe((value:HttpResponse<IOffrecondidat[]>) => {
      this.inscritoffreemploies=value.body
    })
  }
 statusinscrit(id:number,status:string)
 {
   Swal.fire({
     title:'Êtes-vous sûr '+status+' l inscrit de l offre?',
     showCancelButton:true,
     confirmButtonText: 'ok',
   }).then((result) =>{
     if(result.isConfirmed) {
       this.inscritoffreemploieservice.statusinscritoffre(id,status).subscribe({
         next:(msg:HttpResponse<IMessageReponse>)=> this.msg=msg.body.message,
         error:(err:HttpErrorResponse) => {
           //Swal.fire('erreur ','','error')
           this.msg = ''
         },
         complete:() => {
           Swal.fire(this.msg,'','success')
           this.inscritoffreemploieservice.getoffrecondidat().
           subscribe((value:HttpResponse<IOffrecondidat[]>) => {
             this.inscritoffreemploies=value.body
           })


         }
       })

     }
   })
 }

}
