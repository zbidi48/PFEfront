import { Component, OnInit } from '@angular/core';
import {FormationService} from "../../services/formation.service";
import {IFormation} from "../../models/IFormation.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpResponse} from "@angular/common/http";
import Swal from "sweetalert2";
import {IMessageReponse} from "../../models/messageReponse.model";

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {
  formations:IFormation[] =[];
 cherchform: FormGroup = this.fb.group({

   key: ['', Validators.required]

  })

  constructor( private formationservice:FormationService,private fb: FormBuilder) { }
  ngOnInit(): void {
    this.getformation();
 }

  getformation()
  {
   this.formationservice.getformations().subscribe((value:any) => {
     this.formations = value.body
   })
  }
  deleteformation(id)
  {
    Swal.fire({
      title: 'vous ete sure de supprimer formation ?',
      text: "vous ne pouvez pas la récuperer aprés la suppréssion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ok, supprimer!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.formationservice.deleteformation(id).subscribe(value => {
          this.getformation()
        })
        Swal.fire(
          'supprimer!',
          'la formation est supprimé.',
          'success'
        )
      }
    })

  }
 searchformation():void
 {
   if(this.cherchform.valid)
   {
     this.formationservice.chercherformation(this.cherchform.value.key).subscribe(
       (value:HttpResponse<IFormation[]>) => {
         this.formations=value.body
       }
     )
   }else
   {
     this.getformation()
   }
 }


}
