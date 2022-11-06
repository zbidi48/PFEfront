import { Component, OnInit } from '@angular/core';
import {NotedefraieService} from "../../services/notedefraie.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {INotedefraie} from "../../models/INotedefraie.model";
import {IEmployee} from "../../models/IEmployee.model";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-notedefraie',
  templateUrl: './notedefraie.component.html',
  styleUrls: ['./notedefraie.component.scss']
})
export class NotedefraieComponent implements OnInit {
  notedefraies:INotedefraie[]=[];
  employees:IEmployee[]=[];
  searchnotedefraieform: FormGroup = this.fb.group({

    jobid: ['',Validators.required]


  })

  constructor(private notedefraieservice:NotedefraieService,
              private fb: FormBuilder,
              private employeeservice:EmployeeService) { }

  ngOnInit(): void {
    this.getnotedefraie()
    this.getemployee()
  }
  getnotedefraie():void
  {
    this.notedefraieservice.getnotedefraie().subscribe((value:any) => {
      this.notedefraies=value.body

    })
  }
  deletenotedefraie(id):void
  {
    if (confirm('vous ete sure d efface' + id + '!!'))
    {
      this.notedefraieservice.deletenotedefraie(id).subscribe(value => {
        this.getnotedefraie()
      })
    }


  }
  searchnotedefraie():void
  {
    //const data=this.searchnotedefraieform.value;
    //console.log(this.searchnotedefraieform.value)



      this.notedefraieservice.searchnotedefraie(this.searchnotedefraieform.value.jobid

        ).subscribe((value:any) => {
        this.notedefraies=value.body})


  }
  getemployee():void
  {
    this.employeeservice.getemployee().subscribe((value:any) => {
      this.employees=value.body
    })
  }

}
