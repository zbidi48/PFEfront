import { Component, OnInit } from '@angular/core';
import {IOffreemploie} from "../../models/IOffreemploie.model";
import {OffreemploieService} from "../../services/offreemploie.service";

@Component({
  selector: 'app-offreemploie',
  templateUrl: './offreemploie.component.html',
  styleUrls: ['./offreemploie.component.scss']
})
export class OffreemploieComponent implements OnInit {
  offreemploies:IOffreemploie[]=[];
  constructor(private offreemploieservice:OffreemploieService) { }

  ngOnInit(): void {
    this.getoffre()
  }
  getoffre()
  {
    this.offreemploieservice.getoffre().subscribe((value:any) => {
      this.offreemploies=value.body
    })
  }
}
