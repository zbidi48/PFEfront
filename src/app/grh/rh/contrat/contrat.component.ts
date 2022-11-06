import { Component, OnInit } from '@angular/core';
import {IContrat} from "../../models/IContrat.model";
import {ContratService} from "../../services/contrat.service";
import {EmployeeService} from "../../services/employee.service";
import {IEmployee} from "../../models/IEmployee.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpResponse} from "@angular/common/http";
import {IContratSearch} from "../../models/IContratSearch.model";

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent implements OnInit {
  contras:IContrat[]=[];
  employees:IEmployee[]=[];
  contrat:IContratSearch=null;
  cherchcontratform: FormGroup = this.fb.group({

    code: ['', Validators.required]

  })
  chercherparjobid:FormGroup = this.fb.group({
    jobid: ['', Validators.required]
  })
  constructor(private contratservice:ContratService,
              private employeeservice:EmployeeService,
              private fb:FormBuilder) { }

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
  searchcontratbycode():void
  {
    //console.log(this.cherchcontratform.value.code)

    this.contratservice.searchcontratbycode(this.cherchcontratform.value.code).subscribe(
      (value:HttpResponse<IContrat>) => {
        this.contrat=value.body

      }
    )

  }
  searchcontratbyjobid():void
  {
    this.contratservice.searchcontratbyjobid(this.chercherparjobid.value.jobid).subscribe(
      (value:HttpResponse<IContrat>) => {
        this.contrat=value.body

      }
    )
  }

}
