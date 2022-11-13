import { Component, OnInit } from '@angular/core';
import {OffreemploiecondidatService} from "../../services/offreemploiecondidat.service";
import {IOffrecondidat} from "../../models/IOffrecondidat.model";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-inscritoffremploie',
  templateUrl: './inscritoffremploie.component.html',
  styleUrls: ['./inscritoffremploie.component.scss']
})
export class InscritoffremploieComponent implements OnInit {
  inscritoffreemploies:IOffrecondidat[]=[];

  constructor(private inscritoffreemploieservice:OffreemploiecondidatService) { }

  ngOnInit(): void {
    this.inscritoffreemploieservice.getoffrecondidat().
    subscribe((value:HttpResponse<IOffrecondidat[]>) => {
      this.inscritoffreemploies=value.body

      }
    )
  }

}
