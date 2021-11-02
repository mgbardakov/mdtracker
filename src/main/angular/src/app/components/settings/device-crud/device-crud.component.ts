import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Device} from "../../../model/device";
import {MatDialog} from "@angular/material/dialog";
import {DeviceFormComponent} from "./device-form/device-form.component";
import {FormControl, FormGroup} from "@angular/forms";
import {DeviceQrTableComponent} from "./device-qr-printer/device-qr-table.component";

@Component({
  selector: 'app-device-crud',
  templateUrl: './device-crud.component.html',
  styleUrls: ['./device-crud.component.css']
})
export class DeviceCrudComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(DeviceQrTableComponent) table: DeviceQrTableComponent
  form: FormGroup
  devices: Device[];
  displayedColumns: string[] = ['index', 'name', 'serialNumber', 'verificationExpire'];
  dataSource;
  printableDevices: Device[];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;}


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.form = new FormGroup({devicesToPrint: new FormControl()})
    this.devices = [
      {id: 1, name: 'Линейка', verificationExpire: new Date(2022, 8, 18), taken: true, serialNumber: '321511'},
      {id: 2, name: 'Шумомер', verificationExpire: new Date(2022, 8, 19), taken: true, serialNumber: '126544'},
      {id: 3, name: 'Метеомер', verificationExpire: new Date(2022, 8, 19), taken: true, serialNumber: '315174'}
    ];
    this.dataSource = new MatTableDataSource<Device>(this.devices)
  }

  openDialog(device: Device): void {
    this.dialog.open(DeviceFormComponent, {
      width: '700px',
      data: device
    });
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
