import { WorkerService } from './Worker.service';
import { OnInit, Component } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';


@Component({
    selector:'app-worker',
    templateUrl:'./Worker.template.html',
    styleUrls:['./work.style.css']
})
export class WorkerComponent implements OnInit{
    public workers=[];    
    public selectId;
    constructor(private _worker:WorkerService,private router:Router,private route:ActivatedRoute) {
        
    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.workers=this._worker.getworker();
        this.route.paramMap.subscribe((param:ParamMap)=>{
            let id=parseInt(param.get('id'));
            this.selectId=id;
        });
    }
    OnSelect(worker){
        this.router.navigate(['/worker',worker.id]);
    }
    isSelected(worker){
        return worker.id === this.selectId;
    }

}