import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  errorMessage = ""

  constructor(private authService: AuthService) { }


  ngOnInit(): void {
    this.form = new FormGroup({login: new FormControl(),
    password: new FormControl()});
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
}
