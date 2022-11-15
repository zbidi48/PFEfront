import { Component, OnInit } from '@angular/core';
import {OffreemploiecondidatService} from "../../services/offreemploiecondidat.service";
import {ActivatedRoute} from "@angular/router";
import {HttpResponse} from "@angular/common/http";
import {IOffrecondidat} from "../../models/IOffrecondidat.model";

@Component({
  selector: 'app-detailloffreinscrit',
  templateUrl: './detailloffreinscrit.component.html',
  styleUrls: ['./detailloffreinscrit.component.scss']
})
export class DetailloffreinscritComponent implements OnInit {
  inscritoffre:IOffrecondidat=null;

  constructor(private inscritoffreservice:OffreemploiecondidatService,
              private path:ActivatedRoute) { }

  ngOnInit(): void {
   /*
    this.inscritoffreservice.Detailoffrecondidat(this.path.snapshot.params.id).subscribe(
      (value:HttpResponse<IOffrecondidat>) => {
        this.inscritoffre=value.body
      })
    */
  }

}
