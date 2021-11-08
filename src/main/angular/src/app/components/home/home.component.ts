import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {RegisterDeviceService} from "../../services/register-device.service";
import {Record} from "../../model/record";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>
  records: Record[];
  displayedColumns: string[] = ['id', 'name', 'serialNumber', 'deleteAction'];
  dataSource = new MatTableDataSource();
  constructor(private router: Router,
              private registerDeviceService: RegisterDeviceService) {
  }

  ngOnInit(): void {
    this.registerDeviceService.getAllActiveRecords().subscribe(records => {
      this.records = records;
      this.dataSource.data = this.records;
    })
  }

  closeRecord(record: Record) {
    this.registerDeviceService.closeRecord(record).subscribe(() => {
      let index = this.records.indexOf(record)
      this.records.splice(index, 1)
      this.dataSource.data = this.records;
      this.table.renderRows();
    })
  }

  closeAllRecords() {
    this.registerDeviceService.closeAllRecords().subscribe(() => {
      this.records = [];
      this.dataSource.data = this.records;
      this.table.renderRows()
    })
  }

  goToDevicePicker() {
    this.router.navigate(['register-devices'])
  }

}
