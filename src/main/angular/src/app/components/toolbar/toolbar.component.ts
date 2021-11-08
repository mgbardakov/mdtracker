import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/security/auth.service";
import {addModuleImportToModule} from "@angular/cdk/schematics";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy {

  userName: String;
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

  getName(): string {
    let name = JSON.parse(localStorage.getItem('employee')).name;
    let lastName = name.split(" ")[0] + " "
    let firstName = name.split(" ")[1] === undefined ? "" : name.split(" ")[1][0] + ". "
    let middleName = name.split(" ")[2] === undefined ? "" : name.split(" ")[2][0] + "."
    return lastName + firstName + middleName
  }


}
