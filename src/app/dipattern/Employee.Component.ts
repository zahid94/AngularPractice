import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './Employee.Service';

@Component({
  selector: '.app-dipattern',
  templateUrl: './dipattern.component.html',
  styleUrls: ['./dipattern.component.css']
})
export class EmployeeListComponent implements OnInit {
public Employee=[];
  constructor( private _employeeService:EmployeeService) {
   
   }

  ngOnInit() {
      this.Employee=this._employeeService.getEmployee();
  }

}