import { Component, OnInit } from '@angular/core';
import {IOffrecondidat} from "../../models/IOffrecondidat.model";
import {OffreemploiecondidatService} from "../../services/offreemploiecondidat.service";
import {StorageService} from "../../services/storage.service";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-inscritoffrecandidat',
  templateUrl: './inscritoffrecandidat.component.html',
  styleUrls: ['./inscritoffrecandidat.component.scss']
})
export class InscritoffrecandidatComponent implements OnInit {
 inscitoffre:IOffrecondidat[]=[];
  constructor(private inscritoffreservice:OffreemploiecondidatService,
              private storageservice:StorageService) { }

  ngOnInit(): void {
    this.inscritoffreservice.getinscritoffrebymail(this.storageservice.getEmail()).subscribe(
      (value:HttpResponse<IOffrecondidat[]>) => {
        this.inscitoffre=value.body
      }
    )
  }

}
