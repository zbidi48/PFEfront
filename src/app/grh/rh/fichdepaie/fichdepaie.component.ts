import { Component, OnInit } from '@angular/core';
import {FichedepaieService} from "../../services/fichedepaie.service";
import {IFichdepaie} from "../../models/IFichdepaie.model";
import {IEmployee} from "../../models/IEmployee.model";
import {EmployeeService} from "../../services/employee.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpResponse} from "@angular/common/http";

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
       data=>{
         this.fiches=data.body
       },(err) => {
         alert(('eurreure'));
       }
     )
   }
  Deletefichedepaie(id):void
  {
    if (confirm('vous ete sure d efface' + id + '!!'))
    {
      this.fichedepaieservice.deletefiche(id).subscribe((data:any)=>{
        this.getfichedepaie()
      })
    }
  }
  getemploy():void
  {
    this.employeeservice.getemployee().subscribe(value => {
      this.employees=value.body

    },(error)=>{
      alert(('eurreure'));
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

}
