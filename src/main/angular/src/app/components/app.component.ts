import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/security/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular';

  constructor(public authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {

  }


}

export const ROLE_NAMES = new Map();
ROLE_NAMES.set('ROLE_ADMIN', 'Администратор')
ROLE_NAMES.set('ROLE_USER', 'Пользователь')
