import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Record} from "../../model/record";
import {Employee} from "../../model/employee";
import {Device} from "../../model/device";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {RecordFormComponent} from "./record-form/record-form.component";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})

export class JournalComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sortingDataAccessor = (record, property) => {
      switch(property) {
        case 'deviceName': return record.device.name
        case 'serialNumber': return record.device.serialNumber;
        default: return record[property];
      }
    };
    this.dataSource.sort = this.sort;
  }

  form: FormGroup;

  employees: Employee[] = [{id:1, name: "Петя", position:null},
    {id:2, name: "Маша", position:null}]

  devices: Device[] = [{id:1, name:'Шумомер', verificationExpire:null, serialNumber: '123', taken:null},
    {id:2, name:'Линейка', verificationExpire:null, serialNumber: '123', taken:null}]

  records: Record[] = [{id: 1, taken: new Date('01.10.2021'),
    device: {id: 1, name: 'Шумомер', serialNumber: "123", taken: true, verificationExpire: new Date('02.10.2022')},
    employee: {id: 1, name: "Петя", position: {id:1, name: "инженер"}}, returned: new Date('03.11.2019')},
    {id: 1, taken: new Date('01.10.2021'),
      device: {id: 1, name: 'Шумомер', serialNumber: "123", taken: true, verificationExpire: new Date('02.10.2022')},
      employee: {id: 1, name: "Петя", position: {id:1, name: "инженер"}}, returned: null},
    {id: 1, taken: new Date('01.10.2021'),
      device: {id: 1, name: 'Шумомер', serialNumber: "123", taken: true, verificationExpire: new Date('02.10.2022')},
      employee: {id: 1, name: "Петя", position: {id:1, name: "инженер"}}, returned: null},
    {id: 1, taken: new Date('01.10.2021'),
      device: {id: 1, name: 'Шумомер', serialNumber: "123", taken: true, verificationExpire: new Date('02.10.2022')},
      employee: {id: 1, name: "Петя", position: {id:1, name: "инженер"}}, returned: null},
    {id: 1, taken: new Date('01.10.2021'),
      device: {id: 1, name: 'Шумомер', serialNumber: "123", taken: true, verificationExpire: new Date('02.10.2022')},
      employee: {id: 1, name: "Петя", position: {id:1, name: "инженер"}}, returned: null},
    {id: 1, taken: new Date('01.10.2021'),
      device: {id: 1, name: 'Шумомер', serialNumber: "123", taken: true, verificationExpire: new Date('02.10.2022')},
      employee: {id: 1, name: "Петя", position: {id:1, name: "инженер"}}, returned: null},
    {id: 1, taken: new Date('01.10.2021'),
      device: {id: 1, name: 'Шумомер', serialNumber: "123", taken: true, verificationExpire: new Date('02.10.2022')},
      employee: {id: 1, name: "Петя", position: {id:1, name: "инженер"}}, returned: null},
    {id: 1, taken: new Date('01.10.2021'),
      device: {id: 1, name: 'Шумомер', serialNumber: "123", taken: true, verificationExpire: new Date('02.10.2022')},
      employee: {id: 1, name: "Петя", position: {id:1, name: "инженер"}}, returned: null},
    {id: 1, taken: new Date('01.10.2021'),
      device: {id: 1, name: 'Шумомер', serialNumber: "123", taken: true, verificationExpire: new Date('02.10.2022')},
      employee: {id: 1, name: "Петя", position: {id:1, name: "инженер"}}, returned: null},
    {id: 1, taken: new Date('01.10.2021'),
      device: {id: 1, name: 'Шумомер', serialNumber: "123", taken: true, verificationExpire: new Date('02.10.2022')},
      employee: {id: 1, name: "Петя", position: {id:1, name: "инженер"}}, returned: null},
    {id: 1, taken: new Date('01.10.2021'),
      device: {id: 1, name: 'Шумомер', serialNumber: "123", taken: true, verificationExpire: new Date('02.10.2022')},
      employee: {id: 1, name: "Петя", position: {id:1, name: "инженер"}}, returned: null},{id: 1, taken: new Date('01.10.2021'),
      device: {id: 1, name: 'Шумомер', serialNumber: "123", taken: true, verificationExpire: new Date('02.10.2022')},
      employee: {id: 1, name: "Петя", position: {id:1, name: "инженер"}}, returned: null},
    {id: 1, taken: new Date('01.10.2021'),
      device: {id: 1, name: 'Шумомер', serialNumber: "123", taken: true, verificationExpire: new Date('02.10.2022')},
      employee: {id: 1, name: "Петя", position: {id:1, name: "инженер"}}, returned: null}
  ];

  displayedColumns: string[] = ['taken', 'employee', 'deviceName', 'serialNumber', 'returned'];
  dataSource = new MatTableDataSource<Record>(this.records);

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.initForm()
  }
  openDialog(record: Record): void {
      this.dialog.open(RecordFormComponent, {
      width: '55%',
      data: record
    });
  }


  submit() {

  }

  resetForm() {
    this.initForm()
  }

  initForm() {
    this.form = new FormGroup({
      startDate: new FormControl(),
      endDate: new FormControl(),
      employee: new FormControl(),
      device: new FormControl()
    })
  }
}
