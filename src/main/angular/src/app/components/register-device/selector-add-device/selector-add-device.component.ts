import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Device} from "../../../model/device";
import {Subject} from "rxjs";

@Component({
  selector: 'app-selector-add-device',
  templateUrl: './selector-add-device.component.html',
  styleUrls: ['./selector-add-device.component.css']
})
export class SelectorAddDeviceComponent implements OnInit {


  deviceList: Device[];
  @Input()
  subject: Subject<Device[]>
  @Output()
  deviceEvent = new EventEmitter<Device[]>();

  constructor() { }

  ngOnInit(): void {
    this.subject.subscribe(devices => {
      console.log(devices)
      this.deviceList = devices;
    })
  }

  devices = new FormControl();

  addNewDevice() {
    if (this.devices.value !== null) {
      this.deviceEvent.emit(this.devices.value)
    }

  }
}
