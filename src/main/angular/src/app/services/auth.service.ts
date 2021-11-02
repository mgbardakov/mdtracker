import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authorize(user: User) {
    this.http.post<User>('http:\\\\localhost:8080\\api\\v1\\users\\login', JSON.stringify(user),
      {headers: {'Content-Type': 'application/json'}})
      .subscribe(user => {
        localStorage.setItem('user', JSON.stringify(user))
        console.log(user);
      })
  }
}


