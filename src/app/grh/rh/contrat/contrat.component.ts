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
    this.contratservice.getcontrats().subscribe((data:HttpResponse<IContrat[]>)=>
      {

      this.contras=data.body
      })
    }
    getemploy():void
    {
      this.employeeservice.getemployee().subscribe((value:HttpResponse<IEmployee[]>) => {
        this.employees=value.body

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
      (value:HttpResponse<IContrat[]>) => {
        this.contras=value.body

      }
    )

  }
  searchcontratbyjobid():void
  {
    this.contratservice.searchcontratbyjobid(this.chercherparjobid.value.jobid).subscribe(
      (value:HttpResponse<IContrat[]>) => {
        this.contras=value.body

      }
    )
  }

  download(url: string) {
   console.log( URL.createObjectURL(url))
  }
}
