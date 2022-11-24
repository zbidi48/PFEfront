import { Component, OnInit } from '@angular/core';
import {ContratService} from "../../services/contrat.service";
import {StorageService} from "../../services/storage.service";
import {HttpResponse} from "@angular/common/http";
import {IContrat} from "../../models/IContrat.model";
import Swal from "sweetalert2";
import {IMessageReponse} from "../../models/messageReponse.model";

@Component({
  selector: 'app-contratemployee',
  templateUrl: './contratemployee.component.html',
  styleUrls: ['./contratemployee.component.scss']
})
export class ContratemployeeComponent implements OnInit {
 contrats:IContrat[]=[];
  constructor(private contratservice:ContratService,
              private storegservice:StorageService) { }

  ngOnInit(): void {
    this.contratservice.getcontratbyemployid(this.storegservice.getId()).
    subscribe((value:HttpResponse<IContrat[]>) => {
      this.contrats=value.body
      })
  }
  exportcontrat(id:number)
  {
    Swal.fire({
      title: 'telechargement !',
      text: 'contrat génerer sous format pdf dans le path :C:\\\\Users\\\\ASUS\\\\IdeaProjects\\\\PFEbackend\\\\contrat\\\\contrat_'+id+'.pdf',
    })

    this.contratservice.exportcontratpdf(id,this.storegservice.getId()).
        subscribe((data:HttpResponse<IMessageReponse>) =>
        {

        })




  }
}
