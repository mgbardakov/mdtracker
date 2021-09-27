import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Device} from "../../../model/device";

@Component({
  selector: 'app-selector-add-device',
  templateUrl: './selector-add-device.component.html',
  styleUrls: ['./selector-add-device.component.css']
})
export class SelectorAddDeviceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  devices = new FormControl();

  deviceList: Device[] = [{id: 1, name: "Линейка", serialNumber: "123",
    verificationExpire: new Date("12/09/2023"), taken: false},
    {id: 2, name: "Шумомер", serialNumber: "321",
      verificationExpire: new Date("12/11/2022"), taken: false}];
}
