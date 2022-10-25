import { Component, OnInit } from '@angular/core';
import {IOffreemploie} from "../../models/IOffreemploie.model";

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {
offre:IOffreemploie = {
  id:15,
  titredoffre:"test",
  datelimite:null,
  description:"test desc",
  langue:"EN",
  experience:"1ans",
  exigenceemploie:"dsfdsfdsf",
  datecreation:null

}
  constructor() { }

  ngOnInit(): void {
  }

}
