import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
    constructor() {}
    
    ///////////////list of my employee///////

    getEmployee(){
        return[
            { "id": 1, "name": "zahid", "age": 15 },
            { "id": 2, "name": "rahim", "age": 15 },
            { "id": 3, "name": "karim", "age": 15 },
            { "id": 4, "name": "hakim", "age": 15 }
        ];
    }
}