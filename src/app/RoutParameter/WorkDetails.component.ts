import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
    selector:'app-workDetails',
    templateUrl:'./WorkDetails.template.html',
    styleUrls:['./work.style.css']
})
export class WorkDetailsComponent implements OnInit{
    public workerId;
    constructor(private route:ActivatedRoute,private router:Router) {
        
    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

        // let id=parseInt(this.route.snapshot.paramMap.get('id'));    
        // this.workerId=id;
        this.route.paramMap.subscribe((param:ParamMap)=>{
            let id=parseInt(param.get('id'));
            this.workerId=id;
        });
    }
    goPrevious(){
        let previousId=this.workerId-1;
        this.router.navigate(['/worker',previousId]);
    }

    goNext(){
        let previousId=this.workerId+1;
        this.router.navigate(['/worker',previousId]);
    }
    gotoback(){
        let selectId=this.workerId ? this.workerId:null;
        this.router.navigate(['/worker',{id:selectId}]);
    }

}