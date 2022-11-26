import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {OffreemploieService} from "../../services/offreemploie.service";
import {HttpResponse} from "@angular/common/http";
import {IMessageReponse} from "../../models/messageReponse.model";
import {IOffreemploie} from "../../models/IOffreemploie.model";

@Component({
  selector: 'app-editoffreemploie',
  templateUrl: './editoffreemploie.component.html',
  styleUrls: ['./editoffreemploie.component.scss']
})
export class EditoffreemploieComponent implements OnInit {
  maoffreemplform: FormGroup = this.fb.group({
    titredoffre: ['',Validators.required],
    datelimite: [ Validators.required],
    description: ['', Validators.required],
    langue: ['', Validators.required],
    experience: ['', Validators.required],
    exigenceemploie:['',Validators.required]
  })
  constructor(private fb:FormBuilder,
              private path:ActivatedRoute,
              private router:Router,
              private  offreemploieservice:OffreemploieService) { }

  ngOnInit(): void {

    this.offreemploieservice.getodffrebyid(this.path.snapshot.params.id).
    subscribe((value:HttpResponse<IOffreemploie>) => {
      this.maoffreemplform.setValue(
        {
          titredoffre:value.body.titredoffre,
          datelimite:value.body.datelimite,
          description:value.body.description,
          langue:value.body.langue,
          experience:value.body.experience,
          exigenceemploie:value.body.exigenceemploie
        })
    })
  }
  id;
  data;
  editoffreemploie():void
  {
    this.offreemploieservice.updateoffre(this.maoffreemplform.value,this.path.snapshot.params.id)
      .subscribe((value: HttpResponse<IMessageReponse>) => {
      this.router.navigate(['/rh/offreemploie'])
    })

  }
}
