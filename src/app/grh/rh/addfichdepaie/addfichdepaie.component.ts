import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../services/employee.service";
import {IEmployee} from "../../models/IEmployee.model";
import {FichedepaieService} from "../../services/fichedepaie.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {IMessageReponse} from "../../models/messageReponse.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addfichdepaie',
  templateUrl: './addfichdepaie.component.html',
  styleUrls: ['./addfichdepaie.component.scss']
})
export class AddfichdepaieComponent implements OnInit {
  employees:IEmployee[]=[];
  fichepform: FormGroup = this.fb.group({
    date:[Validators.required],
    salairenet: ['', Validators.required],
    salairebrut: ['', Validators.required],
   employee_id:['',Validators.required]

  })
  formSubmitted: boolean = false;
  message="Ajout avec success!";
  showMsg:boolean = false;
  has_error:boolean = false;
  error_message:string ='';
  constructor(private fb: FormBuilder
              ,private  employeeservice:EmployeeService
              ,private  fichedepaieService:FichedepaieService,
              private  router:Router) { }

  ngOnInit(): void {
    this.getemploy()
  }
  ajouterfichep(): void {
    this.formSubmitted = true;
    if (this.fichepform.valid) {
      //console.log(this.fichepform.value);
      this.fichedepaieService.addfiche(this.fichepform.value).
      subscribe((value:HttpResponse<IMessageReponse>) => {
        //console.log(this.fichepform.value)
        //console.log(value.body.message)
        this.showMsg = true;
        this.fichepform.reset(true);
        this.router.navigateByUrl("/rh/fichdepaie");

      },(error: HttpErrorResponse)=>{
        this.showMsg = false;
        this.has_error = true;
        this.error_message = error.message
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
