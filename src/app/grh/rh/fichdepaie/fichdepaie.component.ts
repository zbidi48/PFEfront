import { Component, OnInit } from '@angular/core';
import {FichedepaieService} from "../../services/fichedepaie.service";
import {IFichdepaie} from "../../models/IFichdepaie.model";
import {IEmployee} from "../../models/IEmployee.model";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-fichdepaie',
  templateUrl: './fichdepaie.component.html',
  styleUrls: ['./fichdepaie.component.scss']
})
export class FichdepaieComponent implements OnInit {
  fiches:IFichdepaie[]=[];
  employees:IEmployee[]=[];
  constructor(private fichedepaieservice:FichedepaieService,private employeeservice:EmployeeService) { }

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

}
