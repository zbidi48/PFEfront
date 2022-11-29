import { Component, OnInit } from '@angular/core';
import {OffreemploiecondidatService} from "../../services/offreemploiecondidat.service";
import {ActivatedRoute} from "@angular/router";
import {IOffrecondidat} from "../../models/IOffrecondidat.model";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-detaillinscritoffre',
  templateUrl: './detaillinscritoffre.component.html',
  styleUrls: ['./detaillinscritoffre.component.scss']
})
export class DetaillinscritoffreComponent implements OnInit {
inscritoffre:IOffrecondidat=null;
  constructor(private innscritoffreservice:OffreemploiecondidatService,
              private path:ActivatedRoute ) { }

  ngOnInit(): void {
    this.innscritoffreservice.Detailoffrecondidat(this.path.snapshot.params.id).subscribe(
      (value:HttpResponse<IOffrecondidat>) => {
        this.inscritoffre=value.body
      }
    )
  }

}
