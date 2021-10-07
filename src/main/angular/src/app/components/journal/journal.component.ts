import { Component, OnInit } from '@angular/core';
import {Record} from "../../model/record";


@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})

export class JournalComponent implements OnInit {


  records: Record[] = [{id: 1, taken: new Date('01.10.2021'),
    device: {id: 1, name: 'Шумомер', serialNumber: "123", taken: true, verificationExpire: new Date('02.10.2022')},
    employee: {id: 1, devices: [], name: "Петя", position: {id:1, name: "инженер"}}, returned: null},
    {id: 1, taken: new Date('01.10.2021'),
      device: {id: 1, name: 'Шумомер', serialNumber: "123", taken: true, verificationExpire: new Date('02.10.2022')},
      employee: {id: 1, devices: [], name: "Петя", position: {id:1, name: "инженер"}}, returned: null}];

  displayedColumns: string[] = ['taken', 'employee', 'deviceName', 'serialNumber', 'returned'];
  dataSource = this.records;

  constructor() { }

  ngOnInit(): void {
  }

}
