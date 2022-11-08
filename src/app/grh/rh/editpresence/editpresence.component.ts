import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PresenceService} from "../../services/presence.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../services/employee.service";
import {IEmployee} from "../../models/IEmployee.model";

@Component({
  selector: 'app-editpresence',
  templateUrl: './editpresence.component.html',
  styleUrls: ['./editpresence.component.scss']
})
export class EditpresenceComponent implements OnInit {
  employees:IEmployee[]=[];
  mapresenceform:FormGroup = this.fb.group({


    nbreheure: ['', Validators.required]
  })
  id;

  constructor(private fb:FormBuilder,
              private presenceservice:PresenceService
              ,private path:ActivatedRoute
              ,private router:Router,
              private  employeeservice:EmployeeService) { }


  ngOnInit(): void {
    this.getprsencedata()
    this.id=this.path.snapshot.params.id;
    this.getemploy()

    //console.log(this.id)
  }
editpresence():void
{

  this.presenceservice.updatepresence(this.mapresenceform.value,this.id).subscribe(value => {
    //console.log(value.body)
    this.router.navigate(['/rh/presence'])
  })

}
getprsencedata():void
{

  this.presenceservice.getpresencebyid(this.id).subscribe((data:any)=>
  {
    this.mapresenceform.setValue(
      {

        nbreheure:data.nbreheure


      }
    )
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
}
