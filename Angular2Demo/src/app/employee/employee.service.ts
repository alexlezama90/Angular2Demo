import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {

    constructor(private _http: Http) { } //injection short-hand sintax

    getEmployees(): Observable<IEmployee[]> {

        return this._http.get("http://localhost:49644/api/employees")
                    .map((response: Response) => <IEmployee[]>response.json());

        //return [
        //    { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/25/1988' },
        //    { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
        //    { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
        //    { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
        //    { code: 'emp105', name: 'Nancy', gender: 'Female', annualSalary: 6700.826, dateOfBirth: '12/15/1982' },
        //    { code: 'emp106', name: 'Stacy', gender: 'Female', annualSalary: 7700.481, dateOfBirth: '11/18/1979' },
        //    { code: 'emp107', name: 'Steve', gender: 'Male', annualSalary: 6700.490, dateOfBirth: '11/18/1979' }
        //]
    }
}