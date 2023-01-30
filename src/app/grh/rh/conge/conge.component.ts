import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";
import {CongeService} from "../../services/conge.service";
import {IEmployee} from "../../models/IEmployee.model";
import {IConge} from "../../models/IConge.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {IMessageReponse} from "../../models/messageReponse.model";
import Swal from "sweetalert2";

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.scss']
})
export class CongeComponent implements OnInit {
  employee:IEmployee[]=[];
  conges:IConge[]=[];
  id:number;
  msg:string = '';
  cherchcongeform: FormGroup = this.fb.group({

    key: ['', Validators.required]

  })

  constructor(private path:ActivatedRoute
    ,private router:Router,
              private congeservice:CongeService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getallconge()
    //this.id=this.path.snapshot.params.id
  }
  //id;
  getallconge():void
  {
    this.congeservice.getconge().subscribe((value:any) => {
      this.conges=value.body
    })
  }
 deleteconge(id):void
 {
   if (confirm('vous ete sure d efface' + id + '!!'))
 {
   this.congeservice.deleteconge(id).subscribe((value:HttpResponse<IMessageReponse>) => {
     this.getallconge()
   })
 }
 }
 searchallconge():void
 {
  if(this.cherchcongeform.valid)
  {
    this.congeservice.searchconge(this.cherchcongeform.value.key).subscribe(
      (value:HttpResponse<IConge[]>) => {
        this.conges=value.body
      })
  }else
  {
    this.getallconge()
  }
 }
 changestatus(id:number,status:string)
 {
   Swal.fire({
     title:'Êtes-vous sûr '+status+' cette visa?',
     showCancelButton:true,
     confirmButtonText: 'ok',
   }).then((result) =>{
     if(result.isConfirmed) {
       this.congeservice.statusconge(id,status).subscribe({
         next:(msg:HttpResponse<IMessageReponse>)=> this.msg=msg.body.message,
         error:(err:HttpErrorResponse) => {
           //Swal.fire('erreur ','','error')
           this.msg = ''
         },
         complete:() => {
           Swal.fire(this.msg,'','success')
          this.getallconge()
         }
       })

     }
   })
 }


}
