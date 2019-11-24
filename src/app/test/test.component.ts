import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
public name:string ="Hello check";
public myid="textId";
public isdisible=false;
public testSuccess="test-success";
public testDenger="test-denger";
public hasError=true;
public isSpecial=true;


  constructor() { }

  ngOnInit() {
  }

/**
 * greenUser
 */
public greenUser() {
  return "Welcome "+this.name;

}
/**
 * Property
 */
public message= {
  "test-success" : !this.hasError,
  "test-denger" : this.hasError,
  "test-spicial" :this.isSpecial
}
public greetting=""
OnClick(event){
  console.log(event);
  this.greetting="welcome to event.";
}
LogMessage(value){
console.log(value);
}

}
