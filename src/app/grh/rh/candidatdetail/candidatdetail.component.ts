import { Component, OnInit } from '@angular/core';
import {ICondidat} from "../../models/ICondidat.model";
import {ActivatedRoute} from "@angular/router";
import {CondidatService} from "../../services/condidat.service";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-candidatdetail',
  templateUrl: './candidatdetail.component.html',
  styleUrls: ['./candidatdetail.component.scss']
})
export class CandidatdetailComponent implements OnInit {
candidat:ICondidat=null;
  constructor( private path:ActivatedRoute,
               private candidatservice:CondidatService) { }

  ngOnInit(): void {
    this.getdetailcand()

  }
  getdetailcand()
  {
    const id=this.path.snapshot.params.id
    //console.log(id)

    this.candidatservice.detaillcandidat(id)
      .subscribe((value:HttpResponse<ICondidat>) => {
        this.candidat=value.body

      })

  }

}
