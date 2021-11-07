import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Position} from "../model/position";

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http: HttpClient) { }

  getAllPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(environment.apiUrl + 'api/v1/positions/');
  }

  createPosition(position: Position): Observable<Position> {
    return this.http.post<Position>(environment.apiUrl + 'api/v1/positions/create',
      position, {headers: {'Content-Type': 'application/json'}});
  }

  updatePosition(position: Position): Observable<Position> {
    return this.http.put(environment.apiUrl + 'api/v1/positions/update',
      position, {headers: {'Content-Type': 'application/json'}})
      .pipe(map(() => {
        return position
      }));
  }

  removePosition(position: Position): Observable<Position> {
    return this.http.post(environment.apiUrl + 'api/v1/positions/delete', position,
      {headers: {'Content-Type': 'application/json'}})
      .pipe(map(() => {
        return position
      }))
  }

}
