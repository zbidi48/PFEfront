import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../services/employee.service";
import {IEmployee} from "../../models/IEmployee.model";
import {FichedepaieService} from "../../services/fichedepaie.service";

@Component({
  selector: 'app-addfichdepaie',
  templateUrl: './addfichdepaie.component.html',
  styleUrls: ['./addfichdepaie.component.scss']
})
export class AddfichdepaieComponent implements OnInit {
  employees:IEmployee[]=[];
  fichepform: FormGroup = this.fb.group({
    date:['',Validators.required],
    salairenet: ['', Validators.required],
    salairebrut: ['', Validators.required],
   employee_id:['',Validators.required]

  })
  formSubmitted: boolean = false;
  message="Ajout avec success!";
  showMsg:boolean = false;
  constructor(private fb: FormBuilder
              ,private  employeeservice:EmployeeService
              ,private  fichedepaieService:FichedepaieService) { }

  ngOnInit(): void {
    this.getemploy()
  }
  ajouterfichep(): void {
    this.formSubmitted = true;
    if (this.fichepform.valid) {
      //console.log(this.fichepform.value);
      this.fichedepaieService.addfiche(this.fichepform.value).subscribe(value => {
        console.log(this.fichepform.value)
        //console.log(value.body.message)
        this.showMsg = true;
        this.fichepform.reset(true);

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
