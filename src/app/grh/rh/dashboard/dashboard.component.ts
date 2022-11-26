import { Component, OnInit } from '@angular/core';
import {InscritformationService} from "../../services/inscritformation.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 total_bien=0;
 total_assezbien=0;
 total_pastellement=0;
  constructor(private inscritFormationService: InscritformationService) { }

  ngOnInit(): void {
    this.inscritFormationService.getTotalFormationBien().subscribe(value => this.total_bien= value.body);
    this.inscritFormationService.getTotalFormationAssezBien().subscribe(value => this.total_assezbien= value.body);
    this.inscritFormationService.getTotalFormationPasTellemnt().subscribe(value => this.total_pastellement= value.body);
  }

}
