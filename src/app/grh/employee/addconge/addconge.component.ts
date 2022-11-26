import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IConge} from "../../models/IConge.model";
import {CongeService} from "../../services/conge.service";
import {IEmployee} from "../../models/IEmployee.model";
import {EmployeeService} from "../../services/employee.service";
import {StorageService} from "../../services/storage.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-addconge',
  templateUrl: './addconge.component.html',
  styleUrls: ['./addconge.component.scss']
})
export class AddcongeComponent implements OnInit {
  conge:IConge[]=[];
  employee:IEmployee[]=[];
congeform: FormGroup = this.fb.group({

  datedebut:['yyyy-MM-dd',Validators.required],
  datefin:['yyyy-MM-dd',Validators.required],

  typeConge:['',Validators.required],
  employee_id:[this.storageservice.getId(),Validators.required]
  })

data;
  formSubmitted:boolean=false;
  message="Ajout avec success!";
  showMsg:boolean = false;
  has_error:boolean = false;
  error_message:string ='';
  constructor(private fb: FormBuilder,
              private congeservice:CongeService,
              private  employeeservice:EmployeeService,
              private storageservice:StorageService) { }

  ngOnInit(): void {
    this.getemploy()
    this.data=this.congeform.value
  }
  Addconge():void
  {
    //console.log(this.congeform.value)
    this.formSubmitted = true;
if (this.congeform.valid)
{
  this.congeservice.addconge(this.congeform.value).subscribe((value:any) => {


    this.congeform.reset(true);

    this.showMsg = true;
  }
,(error: HttpErrorResponse)=>{
    this.showMsg = false;
    this.has_error = true;
    this.error_message = error.message

  }
  )
}




  }
  getemploy():void
  {
    this.employeeservice.getemployee().subscribe(
      (value:any) => {
        this.employee=value.body
      }
    )
  }

}
