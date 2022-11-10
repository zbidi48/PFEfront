import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-creationemployee',
  templateUrl: './creationemployee.component.html',
  styleUrls: ['./creationemployee.component.scss']
})
export class CreationemployeeComponent implements OnInit {

  constructor(private employeeservice:EmployeeService,
              private fb:FormBuilder
               ) { }

  ngOnInit(): void {
  }

}
