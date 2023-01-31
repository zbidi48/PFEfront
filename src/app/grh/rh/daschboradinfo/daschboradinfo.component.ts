import { Component, OnInit } from '@angular/core';
import {DaschbordinfoService} from "../../services/daschbordinfo.service";

@Component({
  selector: 'app-daschboradinfo',
  templateUrl: './daschboradinfo.component.html',
  styleUrls: ['./daschboradinfo.component.scss']
})
export class DaschboradinfoComponent implements OnInit {
totale_candidat=0;
totale_employee=0;
totale_visa=0;
totale_formation=0;
  constructor(private daschbordservice:DaschbordinfoService) { }

  ngOnInit(): void {
    this.daschbordservice.getnbrcandidat().subscribe(value => {
      this.totale_candidat=value.body
    })
    this.daschbordservice.getnbremply().subscribe(value => {
      this.totale_employee=value.body
    })
    this.daschbordservice.getnbrvisa().subscribe(value => {
      this.totale_visa=value.body
    })
    this.daschbordservice.getnbrformation().subscribe(value => {
      this.totale_formation=value.body
    })
  }

}
