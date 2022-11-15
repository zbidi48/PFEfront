import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PresenceService} from "../../services/presence.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../services/employee.service";
import {IEmployee} from "../../models/IEmployee.model";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {IPresence} from "../../models/IPresence.model";
import {IMessageReponse} from "../../models/messageReponse.model";

@Component({
  selector: 'app-editpresence',
  templateUrl: './editpresence.component.html',
  styleUrls: ['./editpresence.component.scss']
})
export class EditpresenceComponent implements OnInit {
  employees:IEmployee[]=[];
  mapresenceform:FormGroup = this.fb.group({


    tempsortie: ['', Validators.required]
  })
  id;

  constructor(private fb:FormBuilder,
              private presenceservice:PresenceService
              ,private path:ActivatedRoute
              ,private router:Router,
              private  employeeservice:EmployeeService) { }


  formSubmitted:boolean=false;
  message="mise a jour avec success!";
  showMsg:boolean = false;
  has_error:boolean = false;
  error_message:string ='';
  ngOnInit(): void {
    this.getprsencedata()
    this.id=this.path.snapshot.params.id;
    this.getemploy()

    //console.log(this.id)
  }
editpresence():void
{
if (this.mapresenceform.valid)
{

 this.presenceservice.updatepresence(this.mapresenceform.value,this.id).subscribe((value:HttpResponse<IMessageReponse>) => {
    //console.log(value.body)
      this.showMsg = true;
    this.router.navigate(['/rh/presence'])

  },(error: HttpErrorResponse)=>{
      this.showMsg = false;
      this.has_error = true;
      this.error_message = error.message

    }
    )

}



}

getprsencedata():void
{

  this.presenceservice.getpresencebyid(this.id).subscribe((data:HttpResponse<IPresence>)=>
  {
    this.mapresenceform.setValue(
      {

        tempsortie:data.body.tempsortie

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
