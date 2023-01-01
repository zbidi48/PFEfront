import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {VisaService} from "../../services/visa.service";
import {IVisa} from "../../models/IVisa.model";
import {IEmployee} from "../../models/IEmployee.model";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {IMessageReponse} from "../../models/messageReponse.model";
import Swal from 'sweetalert2'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.scss']
})
export class VisaComponent implements OnInit {
  visas:IVisa[]=null;
  employees:IEmployee[]=[];
  id:number;
  msg:string = '';
  searchvisaform: FormGroup = this.fb.group({
    key: ['',Validators.required]
  })

  constructor(private path:ActivatedRoute,
              private visaservice:VisaService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getvisas()
    this.id=this.path.snapshot.params.id

  }

  getvisas():void
  {
    this.visaservice.getvisa().subscribe((value:HttpResponse<IVisa[]>) => {
      this.visas=value.body
    })
  }
  deletevisa(id):void
  {
    Swal.fire({
      title: 'vous ete sure de supprimer?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'oui',
      denyButtonText: `non`,
    }).then((result) => {

      if (result.isConfirmed) {
        this.visaservice.deletevisa(id).subscribe(
          (value:HttpResponse<IMessageReponse>) => {
            this.getvisas()
          })
        Swal.fire('supprimer!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('lo peration ne sera pas fait', '', 'info')
      }
    })
  }

  changeStatus(id,status: string) {
    Swal.fire({
      title:'Êtes-vous sûr '+status+' cette visa?',
      showCancelButton:true,
      confirmButtonText: 'ok',
    }).then((result) =>{
      if(result.isConfirmed) {
        this.visaservice.statusvisa(id, status).subscribe({
          next:(msg:HttpResponse<IMessageReponse>)=> this.msg=msg.body.message,
          error:(err:HttpErrorResponse) => {
            //Swal.fire('erreur ','','error')
            this.msg = ''
          },
          complete:() => {
            Swal.fire(this.msg,'','success')
            this.getvisas()
          }
        })

      }
    })

  }


}
