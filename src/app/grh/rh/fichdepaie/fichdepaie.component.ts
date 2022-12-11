import { Component, OnInit } from '@angular/core';
import {FichedepaieService} from "../../services/fichedepaie.service";
import {IFichdepaie} from "../../models/IFichdepaie.model";
import {IEmployee} from "../../models/IEmployee.model";
import {EmployeeService} from "../../services/employee.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpResponse} from "@angular/common/http";
import {IMessageReponse} from "../../models/messageReponse.model";
import Swal from "sweetalert2";

@Component({
  selector: 'app-fichdepaie',
  templateUrl: './fichdepaie.component.html',
  styleUrls: ['./fichdepaie.component.scss']
})
export class FichdepaieComponent implements OnInit {
  fiches:IFichdepaie[]=[];
  employees:IEmployee[]=[];
  cherchficheform: FormGroup = this.fb.group({

    jobid: ['', Validators.required]

  })
  searchficheform: FormGroup = this.fb.group({

    nom: ['', Validators.required],
    prenom: ['', Validators.required]

  })
  constructor(private fichedepaieservice:FichedepaieService,
              private employeeservice:EmployeeService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getfichedepaie()
    this.getemploy()
  }
   getfichedepaie():void
   {
     this.fichedepaieservice.getfiche().subscribe(
       (data:HttpResponse<IFichdepaie[]>)=>{
         this.fiches=data.body
       }
     )
   }
  Deletefichedepaie(id):void
  {
    Swal.fire({
      title: 'vous ete sure de supprimer fiche de paie ?',
      text: "vous ne pouvez pas la récuperer aprés la suppréssion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ok, supprimer!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.fichedepaieservice.deletefiche(id).subscribe((data:HttpResponse<IMessageReponse>)=>{
          this.getfichedepaie()
        })
        Swal.fire(
          'supprimer!',
          'fiche de paie est supprimé.',
          'success'
        )
      }
    })

  }
  getemploy():void
  {
    this.employeeservice.getemployee().subscribe((value:HttpResponse<IEmployee[]>) => {
      this.employees=value.body

    })
  }
  searchfichedepaie():void
  {
    this.fichedepaieservice.searchfiche(this.cherchficheform.value.jobid).subscribe(
      (value:HttpResponse<IFichdepaie[]>) => {
        this.fiches=value.body
      }
    )
  }
  searchfiche():void
  {
    //console.log(this.searchficheform.value.nom,this.searchficheform.value.prenom)
    if(this.searchficheform.valid)
    {
      this.fichedepaieservice.searchfichedepaie(this.searchficheform.value.nom,
        this.searchficheform.value.prenom).subscribe(
          (value:HttpResponse<IFichdepaie[]>) => {
            this.fiches=value.body
          }
      )
    }
  }

}
