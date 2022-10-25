import { Component, OnInit } from '@angular/core';
import {IContrat} from "../../models/IContrat.model";
import {ContratService} from "../../services/contrat.service";
import {EmployeeService} from "../../services/employee.service";
import {IEmployee} from "../../models/IEmployee.model";

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent implements OnInit {
  contras:IContrat[]=[];
  employees:IEmployee[]=[];
  constructor(private contratservice:ContratService,private employeeservice:EmployeeService) { }

  ngOnInit(): void {
    this.getcontrat()
    this.getemploy()
  }
  getcontrat():void
  {
    this.contratservice.getcontrats().subscribe(data=>
      {
      this.contras=data.body
        //console.log(this.contras)
    },(error)=>{
      alert(('eurreure'));
    })
    }
    getemploy():void
    {
      this.employeeservice.getemployee().subscribe(value => {
        this.employees=value.body

      },(error)=>{
        alert(('eurreure'));
      })
    }
  deletecontrat(id):void
  {
    if (confirm('vous ete sure d efface' + id + '!!'))
    {
      this.contratservice.deletecontrat(id).subscribe((data:any)=>
        {
          this.getcontrat()
        }
      )
    }
  }

}
