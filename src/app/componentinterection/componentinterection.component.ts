import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';


@Component({
  selector: '.app-componentinterection',
  templateUrl: './componentinterection.component.html',
  styleUrls: ['./componentinterection.component.css']
})
export class ComponentinterectionComponent implements OnInit {
@Input('perentData') public name;
@Output() public clildEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.clildEvent.emit("Hey zahid");
  }

}
