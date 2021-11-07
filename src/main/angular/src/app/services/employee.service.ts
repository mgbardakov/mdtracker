import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Device} from "../model/device";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Employee} from "../model/employee";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(environment.apiUrl + 'api/v1/employees/')
  }
}
