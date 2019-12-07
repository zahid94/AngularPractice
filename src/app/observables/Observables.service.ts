import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './Employee.models';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ObservableService {
    // private _url:string = "http://localhost:63011/api/User/Details";
    private _url:string="/assets/Employee.json";
    constructor(private http:HttpClient) {}
    
    ///////////////list of my employee///////

    getEmployee(): Observable<IEmployee[]>{
        return this.http.get<IEmployee[]>(this._url)
        .pipe(catchError(this.errorHandeller));
       

    }
    errorHandeller(error:HttpErrorResponse){
        return Observable.throw(error.message|| "server Error");
    }    
    
}