import { Component, OnInit } from '@angular/core';
import {IOffreemploie} from "../../models/IOffreemploie.model";
import {OffreemploieService} from "../../services/offreemploie.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-offreemploie',
  templateUrl: './offreemploie.component.html',
  styleUrls: ['./offreemploie.component.scss']
})
export class OffreemploieComponent implements OnInit {
  offreemploies:IOffreemploie[]=[];
  searchoffreempl: FormGroup = this.fb.group({

    titredoffre: ['', Validators.required]

  })
  constructor(private offreemploieservice:OffreemploieService,
  private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getoffre()
  }
  getoffre()
  {
    this.offreemploieservice.getoffre().subscribe((value:any) => {
      this.offreemploies=value.body
    })
  }
  search():void
  {
    if (this.searchoffreempl.valid)
    {
      this.offreemploieservice.searchoffre(this.searchoffreempl.value.titredoffre).
      subscribe((value:HttpResponse<IOffreemploie[]>) => {
        this.offreemploies=value.body
      })
    }else
    {
      this.getoffre()
    }
  }
}
