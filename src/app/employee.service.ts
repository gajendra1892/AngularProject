import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';//to add catch operator
import 'rxjs/add/observable/throw';//to import throw keyword

@Injectable()
export class EmployeeService {

  private _urls:string ="/assets/data/employees.json";
  constructor(private http:HttpClient) { }

  getEmployees():Observable<IEmployee[]>{

    return  this.http.get<IEmployee[]>(this._urls)
                     .catch(this.errorHandler);
    
    
    
        // return [
        //   {"id":1,"name":"Andrew","age":30},
        //   {"id":2,"name":"Bradon","age":24},
        //   {"id":3,"name":"Christina","age":26},
        //   {"id":4,"name":"Elena","age":28}
        // ]
      }
      errorHandler(error :HttpErrorResponse){
        return Observable.throw(error.message || "Server Error");
      }

}
