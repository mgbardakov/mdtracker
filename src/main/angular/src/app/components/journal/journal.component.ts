import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Record} from "../../model/record";
import {Employee} from "../../model/employee";
import {Device} from "../../model/device";
import {MatPaginator} from "@angular/material/paginator";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {RecordFormComponent} from "./record-form/record-form.component";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/security/auth.service";
import {RecordService} from "../../services/record.service";
import {RegisterDeviceService} from "../../services/register-device.service";


@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})

export class JournalComponent implements OnInit, AfterViewInit {

  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  form: FormGroup;
  employees: Employee[] = [];
  devices: Device[] = [];
  records: Record[];
  displayedColumns: string[] = ['taken', 'employee', 'deviceName', 'serialNumber', 'returned'];
  dataSource = new MatTableDataSource<Record>();

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sortingDataAccessor = (record, property) => {
      switch(property) {
        case 'deviceName': return record.device.name
        case 'serialNumber': return record.device.serialNumber;
        case 'employee': return record.employee.name;
        default: return record[property];
      }
    };
    this.dataSource.sort = this.sort;
  }



  constructor(public dialog: MatDialog,
              public authService: AuthService,
              private recordService: RecordService,
              private registerDeviceService: RegisterDeviceService) { }

  ngOnInit(): void {
    this.initForm()
    this.recordService.getAllRecords().subscribe(records => {
      this.processRecords(records)
    });

  }
  openDialog(record: Record): MatDialogRef<RecordFormComponent> {
    console.log(record)
      return this.dialog.open(RecordFormComponent, {
      width: '1000px',
      data: record,
      disableClose: true
    });
  }

  createRecord() {
    this.openDialog(null).afterClosed().subscribe(data => {
      switch (data.status) {
        case 'created': {
          this.records.push(data.record)
          this.dataSource.data = this.records;
          this.table.renderRows();
          break;
        }
        case 'canceled': {
          break;
        }
      }

    })
  }

  updateRecord(record: Record) {
    console.log(record)
    this.openDialog(record).afterClosed().subscribe(data => {
      let index = this.records.findIndex(x => x.id === record.id)
      switch (data.status) {
        case 'update': {
          this.records[index] = data.record;
          break;
        }
        case 'remove': {
          this.records.splice(index, 1)
          break;
        }
        case 'canceled': {
          break;
        }
      }
      this.dataSource.data = this.records
      this.table.renderRows();
    })
  }


  submit() {
    console.log(this.getRequest())
    this.recordService.getRecordsByRequest(this.getRequest()).subscribe( records => {
      console.log(records)
      this.processRecords(records)
      this.table.renderRows();
    })
  }

  closeRecord(record: Record) {
    this.registerDeviceService.closeRecord(record).subscribe(returnedRecord => {
      let index = this.records.indexOf(record)
      this.records[index].returned = returnedRecord.returned
      this.dataSource.data = this.records;
      this.table.renderRows();
    })
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

  getRequest(): Object {
    let request = this.form.value;
    request.startDate = request.startDate == null ? 0 : request.startDate.getTime()
    request.endDate = request.endDate == null ? 0 : request.endDate.getTime()
    return request;
  }

  processRecords(records: Record[]) {
    this.records = records;
    this.dataSource.data = records;
    records.forEach(record => {
      if (this.employees.filter(x => x.id === record.employee.id).length === 0) {
        this.employees.push(record.employee);
      }
      if (this.devices.filter(x => x.id === record.device.id).length === 0) {
        this.devices.push(record.device);
      }
    })
  }

}
