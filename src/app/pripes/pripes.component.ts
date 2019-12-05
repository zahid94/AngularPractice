import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-pripes',
  templateUrl: './pripes.component.html',
  styleUrls: ['./pripes.component.css']
})
export class PripesComponent implements OnInit {

  public name="pipes check";
  public titleword="hey pipes to works."
  constructor() { }

  ngOnInit() {
  }
public person={
  "firstName":"zahid",
  "lastName":"Islam"
}
public datetime = new Date();

}
