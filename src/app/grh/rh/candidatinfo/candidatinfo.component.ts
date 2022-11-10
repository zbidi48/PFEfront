import { Component, OnInit } from '@angular/core';
import {CondidatService} from "../../services/condidat.service";
import {ICondidat} from "../../models/ICondidat.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-candidatinfo',
  templateUrl: './candidatinfo.component.html',
  styleUrls: ['./candidatinfo.component.scss']
})
export class CandidatinfoComponent implements OnInit {
  candidats:ICondidat[]=[];
  cherchcandidatform: FormGroup = this.fb.group({

    nom: ['', Validators.required],
    prenom:['', Validators.required]

  })

  constructor(private condidatservice:CondidatService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.condidatservice.getcondidat().subscribe(value => {
      this.candidats=value.body

    })
  }
  /*
  searchcandidat():void
  {

  }
   */

}
