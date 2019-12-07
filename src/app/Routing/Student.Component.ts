import { StudentService } from './Student.Service';
import { OnInit, Component } from '@angular/core';

@Component(
    {
        selector:'.app-Studnet',
        templateUrl:'./Student.Template.html',
        styleUrls:['./Student.Style.css']
    }
)

export class StudentComponent implements OnInit{
    public student=[];
    constructor(private _student:StudentService) {        
    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.student=this._student.getStudent();
    }
}