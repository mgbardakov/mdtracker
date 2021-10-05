import { Component, OnInit } from '@angular/core';
import {Device} from "../../model/device";

@Component({
  selector: 'app-register-device',
  templateUrl: './register-device.component.html',
  styleUrls: ['./register-device.component.css']
})
export class RegisterDeviceComponent implements OnInit {

  devices: Device[] = [
    {id: 1, name: 'Линейка', verificationExpire: new Date('18.08.2022'), taken: true, serialNumber: '321511'},
    {id: 2, name: 'Шумомер', verificationExpire: new Date('19.08.2022'), taken: true, serialNumber: '126544'},
    {id: 3, name: 'Метеомер', verificationExpire: new Date('19.08.2022'), taken: true, serialNumber: '315174'}
  ];
  displayedColumns: string[] = ['id', 'name', 'serialNumber'];
  dataSource = this.devices;

  constructor() { }

  ngOnInit(): void {
  }

}
