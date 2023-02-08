import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContratService} from "../../services/contrat.service";
import {EmployeeService} from "../../services/employee.service";
import {IEmployee} from "../../models/IEmployee.model";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {IMessageReponse} from "../../models/messageReponse.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addcontrat',
  templateUrl: './addcontrat.component.html',
  styleUrls: ['./addcontrat.component.scss']
})
export class AddcontratComponent implements OnInit {
  employees:IEmployee[]=[];
 contratform: FormGroup = this.fb.group({

    type:['', Validators.required],
    datedebut:['', Validators.required],

   employee_id:[Validators.required]


  })
  constructor( private fb:FormBuilder,
               private contratservice:ContratService ,
               private  employeeservice:EmployeeService,
               private  router:Router) { }
  formSubmitted: boolean = false;
  message="Ajout avec success!";
  showMsg:boolean = false;
  has_error:boolean = false;
  error_message:string ='';
  ngOnInit(): void {
    this.employeeservice.getemployee().subscribe((value:HttpResponse<IEmployee[]>) => {
      this.employees=value.body

    })
  }
Addcontrat():void
{

  //console.log(this.contratform.value)
  this.formSubmitted=true;
  if(this.contratform.valid)
  {
    this.contratservice.addcontrat(this.contratform.value).subscribe(
      (res:HttpResponse<IMessageReponse>)=>{
        //console.log(res.body.message);
        this.showMsg = true;
        this.contratform.reset(true);
        this.router.navigateByUrl("/rh/contrat");
      },(error: HttpErrorResponse)=>{
        this.showMsg = false;
        this.has_error = true;
        this.error_message = error.message
      }
    )
  }

}

}
