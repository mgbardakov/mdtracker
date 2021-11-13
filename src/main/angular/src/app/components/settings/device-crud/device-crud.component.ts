import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {Device} from "../../../model/device";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DeviceFormComponent} from "./device-form/device-form.component";
import {FormControl, FormGroup} from "@angular/forms";
import {DeviceQrTableComponent} from "./device-qr-printer/device-qr-table.component";
import {DeviceService} from "../../../services/device.service";

@Component({
  selector: 'app-device-crud',
  templateUrl: './device-crud.component.html',
  styleUrls: ['./device-crud.component.css']
})
export class DeviceCrudComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(DeviceQrTableComponent) table: DeviceQrTableComponent
  @ViewChild(MatTable) matTable: MatTable<any>
  form: FormGroup
  devices: Device[];
  displayedColumns: string[] = ['index', 'name', 'serialNumber', 'verificationExpire'];
  dataSource = new MatTableDataSource<Device>();
  printableDevices: Device[];
  filteredDevices: Device[];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;}


  constructor(public dialog: MatDialog,
              private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.form = new FormGroup({devicesToPrint: new FormControl()})
    this.deviceService.getAllDevices().subscribe(devices => {
      this.devices = devices;
      this.filteredDevices = devices;
      this.dataSource.data = this.devices
    })
  }

  openDialog(device: Device): MatDialogRef<any> {
    return this.dialog.open(DeviceFormComponent, {
      width: '700px',
      data: device,
      disableClose: true
    });
  }

  createNewDevice() {
    this.openDialog(null).afterClosed().subscribe(data => {
      switch (data.status) {
        case "created": {
          this.devices.push(data.device)
          this.dataSource.data = this.devices;
          this.matTable.renderRows();
          break;
        }
        case "canceled": {
          break;
        }
      }
    })
  }

  updateOrDeleteDevice(device: Device) {
    this.openDialog(device).afterClosed().subscribe(data => {
      let index = this.devices.findIndex(x => x.id === device.id)
      console.log(data)
      switch (data.status) {
        case 'updated': {
          console.log('updated')
          this.devices[index] = data.device;
          break;
        }
        case 'removed': {
          console.log('removed')
          this.devices.splice(index, 1)
          break;
        }
        case 'canceled': {
          console.log('canceled')
          break;
        }
      }
      this.dataSource.data = this.devices
      this.matTable.renderRows();
    })
  }

  submit() {
    let devicePrintArray: Device[] = this.form.controls.devicesToPrint.value;
    if (devicePrintArray !== null) {
      this.printableDevices = [];
      devicePrintArray.forEach(x => this.printableDevices.push(x))
    } else {
      this.printableDevices = this.devices
    }
    // console.log(JSON.stringify(this.printableDevices))
    setTimeout(this.table.generatePDF, 1000)


  }






}
