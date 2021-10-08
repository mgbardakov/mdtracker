import { Component, OnInit } from '@angular/core';
import {Device} from "../../model/device";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  router: Router;

  devices: Device[] = [
    {id: 1, name: 'Линейка', verificationExpire: new Date('18.08.2022'), taken: true, serialNumber: '321511'},
    {id: 2, name: 'Шумомер', verificationExpire: new Date('19.08.2022'), taken: true, serialNumber: '126544'},
    {id: 3, name: 'Метеомер', verificationExpire: new Date('19.08.2022'), taken: true, serialNumber: '315174'}
  ];
  displayedColumns: string[] = ['id', 'name', 'serialNumber'];
  dataSource = this.devices;
  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }

}
