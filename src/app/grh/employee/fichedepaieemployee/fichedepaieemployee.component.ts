import { Component, OnInit } from '@angular/core';
import {FichedepaieService} from "../../services/fichedepaie.service";
import {StorageService} from "../../services/storage.service";
import {HttpResponse} from "@angular/common/http";
import {IFichdepaie} from "../../models/IFichdepaie.model";
import {IMessageReponse} from "../../models/messageReponse.model";
import Swal from "sweetalert2";

@Component({
  selector: 'app-fichedepaieemployee',
  templateUrl: './fichedepaieemployee.component.html',
  styleUrls: ['./fichedepaieemployee.component.scss']
})
export class FichedepaieemployeeComponent implements OnInit {
fiches:IFichdepaie[]=[];
  constructor( private fichedepaieservice:FichedepaieService,
               private storageservice:StorageService) { }

  ngOnInit(): void {
    this.fichedepaieservice.getfichebyemplid(this.storageservice.getId()).subscribe(
      (value:HttpResponse<IFichdepaie[]>) => {
        this.fiches=value.body
      }
    )
  }
  exporterfiche(id:number)
  {
    Swal.fire({
      title: 'telechargement !',
      text: 'contrat génerer sous format pdf dans le path :C:\\\\Users\\\\ASUS\\\\IdeaProjects\\\\PFEbackend' +
        '\\\\fichedepaie\\\\fichedepaie'+id+'.pdf',
    })
    this.fichedepaieservice.exporterfichedepaie(id,this.storageservice.getId()).subscribe(
      (value:HttpResponse<IMessageReponse>) => {

      }
    )
  }

}
