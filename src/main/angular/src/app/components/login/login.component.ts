import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/security/auth.service";
import {User} from "../../model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup;
  errorMessage: String = ""

  constructor(private authService: AuthService) { }


  ngOnInit(): void {
    this.form = new FormGroup({login: new FormControl(),
    password: new FormControl()});
    this.authService.errorStream.subscribe(errMsg => {
      this.errorMessage = errMsg;
    })
  }

  login() {
    this.authService.authorize(this.getUser())
  }

  getUser(): User {
    return {id: null, login: this.form.controls.login.value,
      employee: null, password: this.form.controls.password.value,
      authorities: null
    }
  }

  ngOnDestroy(): void {
    //this.authService.errorStream.unsubscribe();
  }
}
