import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-structuredirective',
  templateUrl: './structuredirective.component.html',
  styleUrls: ['./structuredirective.component.css']
})
export class StructuredirectiveComponent implements OnInit {
display=true ;
color="blue";
public colors=["red","blue","green","yellow"];

  constructor() { }

  ngOnInit() {
  }

}
