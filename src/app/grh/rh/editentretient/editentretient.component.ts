import { Component, OnInit } from '@angular/core';
import {EntretientService} from "../../services/entretient.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpResponse} from "@angular/common/http";
import {IMessageReponse} from "../../models/messageReponse.model";
import {IEntretient} from "../../models/IEntretient.model";

@Component({
  selector: 'app-editentretient',
  templateUrl: './editentretient.component.html',
  styleUrls: ['./editentretient.component.scss']
})
export class EditentretientComponent implements OnInit {

  miseajourentreteintform: FormGroup = this.fb.group({
    date:[Validators.required],
    heure: ['', Validators.required],
  })
  constructor(private entretientservice:EntretientService,
              private fb:FormBuilder,
              private path:ActivatedRoute,
              private router:Router ) { }

  ngOnInit(): void {
    this.entretientservice.getentretientdetail(this.path.snapshot.params.id).
    subscribe((value:HttpResponse<IEntretient>) => {
      this.miseajourentreteintform.setValue({
        date:value.body.date,
        heure:value.body.heure
      })
    })
  }
updateentretient()
{
  this.entretientservice.updateentretient(this.path.snapshot.params.id,this.miseajourentreteintform.value).
  subscribe((value:HttpResponse<IMessageReponse>) => {
    this.router.navigate(['/rh/entretient'])
  })
}
}
