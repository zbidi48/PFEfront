import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../services/employee.service";
import {HttpResponse} from "@angular/common/http";
import {IEmployee} from "../../models/IEmployee.model";
import {IMessageReponse} from "../../models/messageReponse.model";

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.scss']
})
export class EditemployeeComponent implements OnInit {
  employeeeditform: FormGroup = this.fb.group({
    nom:['', Validators.required],
    prenom:['', Validators.required],
    email:['', Validators.required],
    password:['',Validators.required],
    post:['', Validators.required],
    status:['',Validators.required],
    salary:['',Validators.required],
    cnss:['',Validators.required],
    departement:['',Validators.required],
    jobid:['',Validators.required],
  })
  constructor(private fb:FormBuilder,
              private path:ActivatedRoute,
              private router:Router,
              private employeeservice:EmployeeService) { }

  ngOnInit(): void {
    this.getdatbyid()
  }
getdatbyid()
{
  this.employeeservice.getemployeebyid(this.path.snapshot.params.id)
    .subscribe((value:HttpResponse<IEmployee>) =>
    {
      this.employeeeditform.setValue({
        nom:value.body.nom,
        prenom:value.body.prenom,
        email:value.body.email,
        post:value.body.post,
        status:value.body.status,
        salary:value.body.salary,
        cnss:value.body.cnss,
        departement:value.body.departement,
        jobid:value.body.departement
      })
    })
}
editemployee()
{
  this.employeeservice.updateemployee(this.path.snapshot.params.id,this.employeeeditform.value).subscribe(
    (value:HttpResponse<IMessageReponse>) => {
      this.employeeeditform.reset(true)
      this.router.navigate(['/rh/listemployee'])

    }
  )
}
}
