import { Component } from '@angular/core';
import {AuthService} from "../services/security/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  constructor(public authService: AuthService) {
  }
}

export const ROLE_NAMES = new Map();
ROLE_NAMES.set('ROLE_ADMIN', 'Администратор')
ROLE_NAMES.set('ROLE_USER', 'Пользователь')
