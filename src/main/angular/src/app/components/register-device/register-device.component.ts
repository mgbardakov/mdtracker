import {Component, OnInit, ViewChild} from '@angular/core';
import {Device} from "../../model/device";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {DeviceService} from "../../services/device.service";
import {MatDialog} from "@angular/material/dialog";
import {ErrorComponent} from "../error/error.component";
import {Subject} from "rxjs";
import {RegisterDeviceService} from "../../services/register-device.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-register-device',
  templateUrl: './register-device.component.html',
  styleUrls: ['./register-device.component.css']
})
export class RegisterDeviceComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>;
  devices: Device[];
  subject: Subject<Device[]>
  registerDevices: Device[];
  displayedColumns: string[] = ['id', 'name', 'serialNumber', 'deleteAction'];
  dataSource = new MatTableDataSource();
  scannedEnabled: boolean;

  constructor(private deviceService: DeviceService,
              private registerService: RegisterDeviceService,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
    this.subject = new Subject<Device[]>()
    this.deviceService.getAllDevices().subscribe(devices => {
      this.devices = devices;
      this.subject.next(this.getValidDevices())
    })
    this.registerDevices = [];
    this.dataSource.data = this.registerDevices
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
    if (!this.deviceIsNotExpired(device)) {
      this.dialog.open(ErrorComponent, {
        data: {message: `Срок поверки прибора ${device.name} № ${device.serialNumber} истёк`}
      })
    } else if (device.taken) {
      this.dialog.open(ErrorComponent, {
        data: {message: `Прибор ${device.name} № ${device.serialNumber} уже используется`}
      })
    } else if (this.registerDevices.includes(device)) {
      this.dialog.open(ErrorComponent, {
        data: {message: `Прибор ${device.name} № ${device.serialNumber} уже выбран`}
      })
    } else {
      this.registerDevices.push(device);
      this.dataSource.data = this.registerDevices;
    }
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

  getValidDevices(): Device[] {
    return this.devices.filter(device => {
      return !device.taken && this.deviceIsNotExpired(device)
    })
  }

  deviceIsNotExpired(device: Device): boolean {
    return device.verificationExpire.getTime() - Date.now() > 0
  }

  register() {
    this.registerService.registerDevices(this.registerDevices).subscribe(() => {
      this.router.navigate(['home'])
    }, error => {
      this.errorHandler(error)
    })
  }

  errorHandler(error: HttpErrorResponse) {
    this.dialog.open(ErrorComponent, {
      data: {message: 'Неизвестная ошибка'}
    })
  }
}
