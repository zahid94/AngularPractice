import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './Employee.Service';

@Component({
  selector: '.app-EmployeeDetails',
  templateUrl: './EmployeeDetails.template.html',
  styleUrls: ['./dipattern.component.css']
})
export class EmployeeDetails implements OnInit {

    public Employees=[];
  constructor( private _employeeService:EmployeeService) {
   
   }

  ngOnInit() {
      this.Employees=this._employeeService.getEmployee();
  }

}