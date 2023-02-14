import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {IEmployee} from "../../models/IEmployee.model";
import {HttpResponse} from "@angular/common/http";
import Swal from "sweetalert2";
import {IMessageReponse} from "../../models/messageReponse.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MailingService} from "../../services/mailing.service";

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.scss']
})
export class ListemployeeComponent implements OnInit {
 employees:IEmployee[]=[];
 //employee:IEmployee=null;
  searchemployee: FormGroup = this.fb.group({

    key: ['', Validators.required]

  })

  constructor(private employeeservice:EmployeeService,
              private fb:FormBuilder,
              private mailingService:MailingService ) { }

  ngOnInit(): void {
    this.employeeservice.getemployee().subscribe((value:HttpResponse<IEmployee[]>) => {
      this.employees=value.body
    })
  }
  deleteemployee(id:number):void
  {
    Swal.fire({
      title: 'vous ete sure de supprimer l employee',
      icon: 'question',
      iconHtml: '؟',
      confirmButtonText: 'oui',
      cancelButtonText: 'non',
      showCancelButton: true,
      showCloseButton: true
    }).then(value => {
      if(value.isConfirmed)
      {
        this.employeeservice.deleteemployee(id).subscribe((data:HttpResponse<IMessageReponse>) =>
        {
          this.employeeservice.getemployee().subscribe((value:HttpResponse<IEmployee[]>) => {
            this.employees=value.body
          })
        })
        Swal.fire('suppression!', '', 'success')
      }
    })
  }


 saerchemployee():void
 {
if(this.searchemployee.valid)
{
  this.employeeservice.searchemployee(this.searchemployee.value.key).subscribe(
    (value:HttpResponse<IEmployee[]>) => {
      this.employees=value.body
    })
}else
{
  this.employeeservice.getemployee().subscribe((value:HttpResponse<IEmployee[]>) => {
    this.employees=value.body
  })
}
 }
}
