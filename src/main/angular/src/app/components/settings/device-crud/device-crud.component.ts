import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Device} from "../../../model/device";
import {Record} from "../../../model/record";
import {RecordFormComponent} from "../../journal/record-form/record-form.component";
import {MatDialog} from "@angular/material/dialog";
import {DeviceFormComponent} from "./device-form/device-form.component";

@Component({
  selector: 'app-device-crud',
  templateUrl: './device-crud.component.html',
  styleUrls: ['./device-crud.component.css']
})
export class DeviceCrudComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  devices: Device[] = [
    {id: 1, name: 'Линейка', verificationExpire: new Date('08.18.2022'), taken: true, serialNumber: '321511'},
    {id: 2, name: 'Шумомер', verificationExpire: new Date('08.19.2022'), taken: true, serialNumber: '126544'},
    {id: 3, name: 'Метеомер', verificationExpire: new Date('08.19.2022'), taken: true, serialNumber: '315174'}
  ];


  displayedColumns: string[] = ['index', 'name', 'serialNumber', 'verificationExpire'];
  dataSource = new MatTableDataSource<Device>(this.devices);

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(device: Device): void {
    this.dialog.open(DeviceFormComponent, {
      width: '50%',
      data: device
    });
  }

}
