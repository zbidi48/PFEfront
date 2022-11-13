import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {IMessageReponse} from "../../models/messageReponse.model";

@Component({
  selector: 'app-creationemployee',
  templateUrl: './creationemployee.component.html',
  styleUrls: ['./creationemployee.component.scss']
})
export class CreationemployeeComponent implements OnInit {
 employeecreateform: FormGroup = this.fb.group({
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
  formSubmitted:boolean=false;
  message="Ajout avec success!";
  showMsg:boolean = false;
  has_error:boolean = false;
  error_message:string ='';
  constructor(private employeeservice:EmployeeService,
              private fb:FormBuilder
               ) { }

  ngOnInit(): void {
  }
createemployee():void
{
  if(this.employeecreateform.valid)
  {
    //console.log(this.employeecreateform.value)

    this.employeeservice.addemployee(this.employeecreateform.value).
    subscribe((value:HttpResponse<IMessageReponse>) => {
      this.showMsg = true;
      this.employeecreateform.reset(true);


    },(error: HttpErrorResponse)=>{
      this.showMsg = false;
      this.has_error = true;
      this.error_message = error.message

    })

  }
}
}
