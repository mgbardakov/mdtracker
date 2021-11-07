import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/security/auth.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy {

  userName: String = JSON.parse(localStorage.getItem('employee'))?.name;
  router: Router;

  constructor(router: Router, public authService: AuthService) {
    this.router = router;
  }

  ngOnInit(): void {
    this.authService.eventStream.subscribe(employee => {
      this.userName = employee?.name;
    })
  }

  ngOnDestroy(): void {
    //this.authService.eventStream.unsubscribe();
  }


}
