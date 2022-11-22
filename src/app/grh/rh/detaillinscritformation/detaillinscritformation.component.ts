import { Component, OnInit } from '@angular/core';
import {InscritformationService} from "../../services/inscritformation.service";
import {ActivatedRoute} from "@angular/router";
import {HttpResponse} from "@angular/common/http";
import {Iinscritformation} from "../../models/Iinscritformation.model";

@Component({
  selector: 'app-detaillinscritformation',
  templateUrl: './detaillinscritformation.component.html',
  styleUrls: ['./detaillinscritformation.component.scss']
})
export class DetaillinscritformationComponent implements OnInit {
inscritformation:Iinscritformation=null;
  constructor(private inscritformationservice:InscritformationService,
              private path:ActivatedRoute) { }

  ngOnInit(): void {
    this.inscritformationservice.getinscritformationbyid(this.path.snapshot.params.id)
      .subscribe((value:HttpResponse<Iinscritformation>) => {
        this.inscritformation=value.body
      })
  }

}
