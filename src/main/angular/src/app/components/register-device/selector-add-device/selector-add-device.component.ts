import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Device} from "../../../model/device";

@Component({
  selector: 'app-selector-add-device',
  templateUrl: './selector-add-device.component.html',
  styleUrls: ['./selector-add-device.component.css']
})
export class SelectorAddDeviceComponent implements OnInit {

  @Input()
  deviceList: Device[];
  @Output()
  deviceEvent = new EventEmitter<Device[]>();

  constructor() { }

  ngOnInit(): void {
  }

  devices = new FormControl();

  addNewDevice() {
    if (this.devices.value !== null) {
      this.deviceEvent.emit(this.devices.value)
    }

  }
}
