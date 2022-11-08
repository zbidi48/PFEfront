import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContratService} from "../../services/contrat.service";
import {EmployeeService} from "../../services/employee.service";
import {IEmployee} from "../../models/IEmployee.model";

@Component({
  selector: 'app-addcontrat',
  templateUrl: './addcontrat.component.html',
  styleUrls: ['./addcontrat.component.scss']
})
export class AddcontratComponent implements OnInit {
  employees:IEmployee[]=[];
 contratform: FormGroup = this.fb.group({
    code:['', Validators.required],
    libelle:['', Validators.required],
    datedebut:['', Validators.required],
    datefin:['', Validators.required],
   employee_id:[Validators.required]


  })
  constructor( private fb:FormBuilder,
               private contratservice:ContratService ,
               private  employeeservice:EmployeeService) { }
  formSubmitted: boolean = false;
  message="Ajout contrat avec success!";
  showMsg:boolean = false;
  ngOnInit(): void {
    this.getemploy()
  }
Addcontrat():void
{

  //console.log(this.contratform.value)
  this.formSubmitted=true;
  if(this.contratform.valid)
  {
    this.contratservice.addcontrat(this.contratform.value).subscribe(
      res=>{
        //console.log(res.body.message);
        this.showMsg = true;
        this.contratform.reset(true);
      }
    )
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
