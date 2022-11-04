import { Component, OnInit } from '@angular/core';
import {CondidatService} from "../../services/condidat.service";
import {ICondidat} from "../../models/ICondidat.model";

@Component({
  selector: 'app-candidatinfo',
  templateUrl: './candidatinfo.component.html',
  styleUrls: ['./candidatinfo.component.scss']
})
export class CandidatinfoComponent implements OnInit {
  candidats:ICondidat[]=[];

  constructor(private condidatservice:CondidatService) { }

  ngOnInit(): void {
    this.condidatservice.getcondidat().subscribe(value => {
      this.candidats=value.body

    })
  }

}
