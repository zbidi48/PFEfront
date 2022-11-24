import { Component, OnInit } from '@angular/core';
import {CondidatService} from "../../services/condidat.service";
import {ICondidat} from "../../models/ICondidat.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {MailingService} from "../../services/mailing.service";
import {error} from "protractor";
import Swal, {SweetAlertResult} from "sweetalert2";

@Component({
  selector: 'app-candidatinfo',
  templateUrl: './candidatinfo.component.html',
  styleUrls: ['./candidatinfo.component.scss']
})
export class CandidatinfoComponent implements OnInit {
  candidats:ICondidat[]=[];
  cherchcandidatform: FormGroup = this.fb.group({
    nom: ['', Validators.required],
    prenom:['', Validators.required],
    cin:['', Validators.required],
  })


  constructor(private condidatservice:CondidatService, private mailingService:MailingService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.condidatservice.getcondidat().subscribe(value => {
      this.candidats=value.body

    })
  }

  searchcandidat():void
  {
    this.condidatservice.searchcandidat(this.cherchcandidatform.value.nom,
      this.cherchcandidatform.value.prenom).subscribe((value:HttpResponse<ICondidat[]>) => {
        this.candidats=value.body
    })

  }
 searchbyCIN()
 {
   this.condidatservice.searchbycin(this.cherchcandidatform.value.cin).subscribe(
     (value:HttpResponse<ICondidat[]>) => {
       this.candidats=value.body
     }
   )
 }

  sendMail(id: number, typeEmail: string) {
    Swal.fire({
      title: 'Sweet!',
      text: 'voulez vous envoyé un email?',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/fr/a/a7/Mail_%28Apple%29_logo.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    }).then(value => {
      if(typeEmail === 'A'){
        this.mailingService.sendsucce(id).subscribe((value:HttpResponse<string>) => {
        })
      } else  if (typeEmail === 'R'){
        this.mailingService.sendfailed(id).subscribe((value:HttpResponse<string>) => {
        })
      }
    })

  }
}
