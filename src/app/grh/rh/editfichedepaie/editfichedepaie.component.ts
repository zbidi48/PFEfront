import { Component, OnInit } from '@angular/core';
import {IEmployee} from "../../models/IEmployee.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {FichedepaieService} from "../../services/fichedepaie.service";
import {EmployeeService} from "../../services/employee.service";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-editfichedepaie',
  templateUrl: './editfichedepaie.component.html',
  styleUrls: ['./editfichedepaie.component.scss']
})
export class EditfichedepaieComponent implements OnInit {
  employees:IEmployee[]=[];
  mafichepform: FormGroup = this.fb.group({
    date:['',Validators.required],
    salairenet: ['', Validators.required],
    salairebrut: ['', Validators.required]


  })
  constructor(private fb:FormBuilder,
              private path:ActivatedRoute,
              private router:Router,
              private fichedepaieservice:FichedepaieService,
              private employeeservice:EmployeeService
             ) { }

  ngOnInit(): void {
    this.getemploy()
    this.getfichedata()

    //this.id=this.path.snapshot.params.id
  }
  //id;
  getemploy():void
  {
    this.employeeservice.getemployee().subscribe(value => {
      this.employees=value.body

    })
  }
  updatefiche():void
  {
    const  id=this.path.snapshot.params.id
    this.fichedepaieservice.updatefiche(this.mafichepform.value,id).subscribe((value:any) => {
      this.router.navigate(['/rh/fichdepaie'])
     /*
      console.log(value.body)
      console.log(this.mafichepform.value)
      */

    });
  }
  getfichedata():void
  {
    const id=this.path.snapshot.params.id
    this.fichedepaieservice.getfichebyid(id).subscribe((value:any) => {
      this.mafichepform.setValue({
        date:value.date,
        salairenet:value.salairenet,
        salairebrut:value.salairebrut


      })

    })
  }

}
