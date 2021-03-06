import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../../model/user";
import {JwtHelperService} from "@auth0/angular-jwt";
import {catchError, map, tap} from "rxjs/operators";
import {Observable, Subject, throwError} from "rxjs";
import {Employee} from "../../model/employee";
import decode from "jwt-decode";
import {JWTPayload} from "./role-guard.service";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

  eventStream: Subject<Employee> = new Subject();
  errorStream: Subject<String> = new Subject();

  constructor(private http: HttpClient,
              private jwtHelper: JwtHelperService,
              private router: Router) { }

  ngOnInit(): void {
  }



  authorize(user: User) {
    localStorage.removeItem('jwt');
    localStorage.removeItem('employee');
    this.http.post('/api/v1/users/login', JSON.stringify(user),
      {headers: {'Content-Type': 'application/json'}, withCredentials: true, observe: "response"})
      .subscribe(response => {
        console.log("Мы сюда пришли?")
        localStorage.setItem("jwt", response.headers.get("Authorization").split(" ")[1])
        console.log('jwt added to local storage')
        let employee = JSON.parse(JSON.stringify(response.body));
        console.log('employee created')
        this.eventStream.next(employee)
        console.log('employee emitted tot toolbar')
        localStorage.setItem('employee', JSON.stringify(employee))
        console.log('jwt added to local storage')
        this.router.navigate(['home'])
      }, error => {
        console.log(error)
        this.errorStream.next(this.getErrorMessage(error));
      })
  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('jwt');
    return !this.jwtHelper.isTokenExpired(token);
  }

  public isAdmin(): boolean {
    const token = localStorage.getItem('jwt');
    const tokenPayload = decode<JWTPayload>(token);
    return tokenPayload.roles[0] === 'ROLE_ADMIN'
  }

  private getErrorMessage(error: HttpErrorResponse): String {
    console.log(error.status)
    switch (error.status) {
      case 422: {
        return "Неверный логин или пароль"
      }
      default: {
        return "Неизвестная ошибка"
      }
    }
  }
  public getToken(): string {
    return localStorage.getItem('jwt');
  }

  public getCurrentEmployee(): Employee {
    return JSON.parse(localStorage.getItem('employee'))
  }

  public logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('employee')
    this.router.navigate(['login'])
  }


}


