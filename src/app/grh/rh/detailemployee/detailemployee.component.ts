import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {ActivatedRoute} from "@angular/router";
import {IEmployee} from "../../models/IEmployee.model";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-detailemployee',
  templateUrl: './detailemployee.component.html',
  styleUrls: ['./detailemployee.component.scss']
})
export class DetailemployeeComponent implements OnInit {
employee:IEmployee=null;
  constructor(private employeeservice:EmployeeService,
              private path:ActivatedRoute,) { }

  ngOnInit(): void {
    this.employeeservice.getemployeebyid(this.path.snapshot.params.id).
    subscribe((value:HttpResponse<IEmployee>) => {
      this.employee=value.body
      }
    )
  }

}
