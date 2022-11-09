import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {EntretientService} from "../../services/entretient.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {IEntretient} from "../../models/IEntretient.model";
import {IMessageReponse} from "../../models/messageReponse.model";
import Swal from "sweetalert2";

@Component({
  selector: 'app-entretient',
  templateUrl: './entretient.component.html',
  styleUrls: ['./entretient.component.scss']
})
export class EntretientComponent implements OnInit {
  entretients:IEntretient[]=[];
  msg:string = '';
  constructor( private fb:FormBuilder,
               private entrtientservice:EntretientService) { }

  ngOnInit(): void {
    this.getentretient()
  }
  getentretient():void
  {
    this.entrtientservice.getentretient().subscribe((value:HttpResponse<IEntretient[]>) => {
      this.entretients=value.body

    })
  }
  deleteentret(id:number)
  {

    Swal.fire({
      title: 'vous ete sure de supprimer l entretient ?',
      text: "vous ne pouvez pas le récuperer aprés la suppréssion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ok, supprimer!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.entrtientservice.deleteentretient(id).subscribe((value:any) =>{
          this.getentretient()

        })
        Swal.fire(
          'supprimer!',
          'l entretient est supprimé.',
          'success'
        )
      }
    })




  }
  changestatus(id:number,status:string):void
  {
    Swal.fire({
      title:'Êtes-vous sûr '+status+' l entretient?',
      showCancelButton:true,
      confirmButtonText: 'ok',
    }).then((result) =>{
      if(result.isConfirmed) {
        this.entrtientservice.statusentretient(id,status).subscribe({
          next:(msg:HttpResponse<IMessageReponse>)=> this.msg=msg.body.message,
          error:(err:HttpErrorResponse) => {
            //Swal.fire('erreur ','','error')
            this.msg = ''
          },
          complete:() => {
            Swal.fire(this.msg,'','success')
            this.getentretient()
          }
        })

      }
    })
  }

}
