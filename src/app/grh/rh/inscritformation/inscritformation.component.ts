import { Component, OnInit } from '@angular/core';
import {InscritformationService} from "../../services/inscritformation.service";
import {Iinscritformation} from "../../models/Iinscritformation.model";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import Swal from "sweetalert2";
import {IMessageReponse} from "../../models/messageReponse.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-inscritformation',
  templateUrl: './inscritformation.component.html',
  styleUrls: ['./inscritformation.component.scss']
})
export class InscritformationComponent implements OnInit {
  inscritformtions:Iinscritformation[]=[];
  inscritsearchform: FormGroup = this.fb.group({

    jobid: ['', Validators.required],

  })
  constructor(private inscritformationservice:InscritformationService,
              private fb:FormBuilder) { }
  msg:string = '';
  ngOnInit(): void {
    this.inscritformationservice.getinscritformation().
    subscribe((value:HttpResponse<Iinscritformation[]>) => {
      this.inscritformtions=value.body
    })
  }
  changestatus(id:number,status:string)
  {
    Swal.fire({
      title:'Êtes-vous sûr '+status+' l inscrit de formation?',
      showCancelButton:true,
      confirmButtonText: 'ok',
    }).then((result) =>{
      if(result.isConfirmed) {
        this.inscritformationservice.satatusinscritformation(id, status).subscribe({
          next:(msg:HttpResponse<IMessageReponse>)=> this.msg=msg.body.message,
          error:(err:HttpErrorResponse) => {

            this.msg = ''
          },
          complete:() => {
            Swal.fire(this.msg,'','success')
            this.inscritformationservice.getinscritformation().
            subscribe((value:HttpResponse<Iinscritformation[]>) => {
              this.inscritformtions=value.body
            })


          }
        })

      }
    })
  }
  searchinscrit()
  {
    this.inscritformationservice.searchinscritformation(this.inscritsearchform.value.jobid).
    subscribe((value:HttpResponse<Iinscritformation[]>) => {
      this.inscritformtions=value.body
    })
  }

}
