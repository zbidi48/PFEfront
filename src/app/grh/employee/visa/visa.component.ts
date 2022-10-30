import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";
import {VisaService} from "../../services/visa.service";
import {HttpResponse} from "@angular/common/http";
import {IVisa} from "../../models/IVisa.model";

@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.scss']
})
export class VisaComponent implements OnInit {
visas:IVisa[]=[];
  constructor(private path:ActivatedRoute,
              private storageservice:StorageService,
              private visaservice:VisaService) { }

  ngOnInit(): void {
    this.mail=this.storageservice.getEmail()
    this.getallvisa()
  }
  mail;
  getallvisa()
  {
    this.visaservice.getvisabymail(this.mail).subscribe((value:HttpResponse<IVisa[]>) => {
      this.visas=value.body


    })
  }

}
