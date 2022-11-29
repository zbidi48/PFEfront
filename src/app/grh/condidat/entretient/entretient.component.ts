import { Component, OnInit } from '@angular/core';
import {EntretientService} from "../../services/entretient.service";
import {StorageService} from "../../services/storage.service";
import {HttpResponse} from "@angular/common/http";
import {IEntretient} from "../../models/IEntretient.model";

@Component({
  selector: 'app-entretient',
  templateUrl: './entretient.component.html',
  styleUrls: ['./entretient.component.scss']
})
export class EntretientComponent implements OnInit {
entretients:IEntretient[]=[];
  constructor(private entrettienservice:EntretientService,
              private storageservice:StorageService) { }

  ngOnInit(): void {
    this.entrettienservice.getentretientbymail(this.storageservice.getEmail()).subscribe(
      (value:HttpResponse<IEntretient[]>) => {
        this.entretients=value.body
      }
    )
  }

}
