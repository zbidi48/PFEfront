import { Component, OnInit } from '@angular/core';
import {InscritformationService} from "../../services/inscritformation.service";
import {StorageService} from "../../services/storage.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Iinscritformation} from "../../models/Iinscritformation.model";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup} from "@angular/forms";
import {IMessageReponse} from "../../models/messageReponse.model";

@Component({
  selector: 'app-inscritformationemployee',
  templateUrl: './inscritformationemployee.component.html',
  styleUrls: ['./inscritformationemployee.component.scss']
})
export class InscritformationemployeeComponent implements OnInit {
inscritformations:Iinscritformation[]=[];
  closeResult;
  form: FormGroup = this.fb.group({
    idInscrit:[],
    avis:[]
  })
  constructor(private inscritformationservice:InscritformationService,
              private storageservice:StorageService,
              private modalService: NgbModal,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.inscritformationservice.getinsccritbyemployeeid(this.storageservice.getId())
      .subscribe((value:HttpResponse<Iinscritformation[]>) =>
      {
        this.inscritformations=value.body
      })
  }

  open(content: any, idf: any) {
    console.log(idf)
    this.form.controls['idInscrit'].setValue(idf);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

      this.closeResult = `Closed with: ${result}`;
      console.log(this.closeResult);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  saveEvalu() {
    console.log(this.form.value)
    this.inscritformationservice.saveEvaluation(this.form.value).subscribe({
      next:(value: HttpResponse<IMessageReponse>) => {
        console.log(value.body)
        this.modalService.dismissAll();
      },
      error:(err: HttpErrorResponse) => console.log(err.message),
      complete:() => console.log("complete...")
    })

  }
}
