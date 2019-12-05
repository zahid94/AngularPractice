import { Component, OnInit } from '@angular/core';
import { ObservableService } from './Observables.service';

@Component({
  selector: '.app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  public Employee=[];
  public errormsg;
  constructor(private _employeeService:ObservableService) { }

  ngOnInit() {
    this._employeeService.getEmployee().subscribe(data=>this.Employee=data,
      error=>this.errormsg=error);
  }

}
