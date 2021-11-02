import {Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Device} from "../../model/device";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-register-device',
  templateUrl: './register-device.component.html',
  styleUrls: ['./register-device.component.css']
})
export class RegisterDeviceComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>;
  devices: Device[];
  registerDevices: Device[];
  displayedColumns: string[] = ['id', 'name', 'serialNumber'];
  dataSource;
  scannedEnabled: boolean;

  constructor() { }

  ngOnInit(): void {
    this.devices = [
      {id: 1, name: 'Линейка', verificationExpire: new Date(2022, 8, 18), taken: true, serialNumber: '321511'},
      {id: 2, name: 'Шумомер', verificationExpire: new Date(2022, 8, 19), taken: true, serialNumber: '126544'},
      {id: 3, name: 'Метеомер', verificationExpire: new Date(2022, 8, 19), taken: true, serialNumber: '315174'}
    ];
    this.registerDevices = [];
    this.dataSource = this.registerDevices
    this.scannedEnabled = false;
  }

    switchScanner() {
    this.scannedEnabled = !this.scannedEnabled
  }

  scanSuccessHandler(result: string) {
    let id : number = Number.parseInt(result);
    let device: Device = this.devices.find(x => x.id === id)
    console.log(device.name);
    this.addDevice(device);
    this.switchScanner();
    this.table.renderRows();
  }

  addDevice(device: Device) {
    this.dataSource.push(device);
  }

  addDevices(devices: Device[]) {
    devices.forEach(x => this.addDevice(x));
    this.table.renderRows();
  }

  removeDevice(device: Device) {
    let index = this.registerDevices.indexOf(device);
    if (index > -1) {
      this.registerDevices.splice(index, 1)
    }
    this.table.renderRows();
  }
}
