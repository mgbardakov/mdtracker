import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {User} from "../model/user";
import {Authority} from "../model/authority";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl + 'api/v1/users/');
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(environment.apiUrl + 'api/v1/users/create',
      user, {headers: {'Content-Type': 'application/json'}});
  }

  updateUser(user: User): Observable<User> {
    return this.http.put(environment.apiUrl + 'api/v1/users/update',
      user, {headers: {'Content-Type': 'application/json'}})
      .pipe(map(() => {
        return user
      }));
  }

  removeUser(user: User): Observable<User> {
    return this.http.post(environment.apiUrl + 'api/v1/users/delete', user,
      {headers: {'Content-Type': 'application/json'}})
      .pipe(map(() => {
        return user
      }))
  }

  getAllAuthorities(): Observable<Authority[]> {
    return this.http.get<Authority[]>(environment.apiUrl + 'api/v1/users/authorities');
  }
}
