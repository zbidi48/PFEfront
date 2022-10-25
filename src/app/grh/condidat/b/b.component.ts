import {Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {IOffreemploie} from "../../models/IOffreemploie.model";
@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {
@Input() age : number = 0;
offre: IOffreemploie;

  constructor() { }

  ngOnInit(): void {
    console.log(history.state)
  }

}
