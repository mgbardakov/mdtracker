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


@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})

export class JournalComponent implements OnInit, AfterViewInit {

  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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

  form: FormGroup;

  employees: Employee[] = [{id:1, name: "Петя", position:null},
    {id:2, name: "Маша", position:null}]

  devices: Device[] = [{id:1, name:'Шумомер', verificationExpire:null, serialNumber: '123', taken:null},
    {id:2, name:'Линейка', verificationExpire:null, serialNumber: '123', taken:null}]

  records: Record[];

  displayedColumns: string[] = ['taken', 'employee', 'deviceName', 'serialNumber', 'returned'];
  dataSource = new MatTableDataSource<Record>();

  constructor(public dialog: MatDialog, public authService: AuthService, private recordService: RecordService) { }

  ngOnInit(): void {
    this.initForm()
    this.recordService.getAllRecords().subscribe(records => {
      this.records = records;
      this.dataSource.data = records;
      console.log(this.dataSource.data)
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
