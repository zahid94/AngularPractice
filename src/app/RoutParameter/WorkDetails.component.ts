import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'app-workDetails',
    templateUrl:'./WorkDetails.template.html'
})
export class WorkDetailsComponent implements OnInit{
    public workerId;
    constructor(private route:ActivatedRoute) {
        
    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
   let id=parseInt(this.route.snapshot.paramMap.get('id'));    
   this.workerId=id;
    }

}