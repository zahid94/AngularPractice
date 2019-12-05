import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: '.app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  public emplyee = [
    { "id": 1, "name": "zahid", "age": 15 },
    { "id": 2, "name": "rahim", "age": 15 },
    { "id": 3, "name": "karim", "age": 15 },
    { "id": 4, "name": "hakim", "age": 15 }
  ]

}
