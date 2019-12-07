import { WorkerService } from './Worker.service';
import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector:'app-worker',
    templateUrl:'./Worker.template.html',
    styleUrls:['./work.style.css']
})
export class WorkerComponent implements OnInit{
    public workers=[];
    constructor(private _worker:WorkerService,private _router:Router) {
        
    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.workers=this._worker.getworker();
    }
    OnSelect(worker){
        this._router.navigate(['/worker',worker.id])
    }

}