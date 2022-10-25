import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";
import {CongeService} from "../../services/conge.service";
import {IEmployee} from "../../models/IEmployee.model";
import {IConge} from "../../models/IConge.model";

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.scss']
})
export class CongeComponent implements OnInit {
  employee:IEmployee[]=[];
  conges:IConge[]=[];

  constructor(private path:ActivatedRoute
    ,private router:Router,
              private congeservice:CongeService) { }

  ngOnInit(): void {
    this.getallconge()
    this.id=this.path.snapshot.params.id
  }
  id;
  getallconge():void
  {
    this.congeservice.getconge().subscribe((value:any) => {
      this.conges=value.body
    })
  }
 deleteconge(id):void
 {
   if (confirm('vous ete sure d efface' + id + '!!'))
 {
   this.congeservice.deleteconge(this.id).subscribe((value:any) => {
     this.getallconge()
   })
 }
 }


}
