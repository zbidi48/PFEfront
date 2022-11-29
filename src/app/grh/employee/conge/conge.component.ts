import { Component, OnInit } from '@angular/core';
import {IConge} from "../../models/IConge.model";
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";
import {CongeService} from "../../services/conge.service";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.scss']
})
export class CongeComponent implements OnInit {
conges:IConge[]=[];
mail;
  constructor(private path:ActivatedRoute
              ,private router:Router,
              private storageservice:StorageService,
              private congeservice:CongeService) { }

  ngOnInit(): void {
    this.mail=this.storageservice.getEmail()
    this.getconge()

  }
  getconge():void
  {
    this.congeservice.getcongebymail(this.mail).subscribe((value:HttpResponse<IConge[]>) => {
      this.conges=value.body
    })
  }

}
