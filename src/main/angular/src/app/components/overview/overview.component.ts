import { Component, OnInit } from '@angular/core';
import {Employee} from "../../model/employee";
import {Record} from "../../model/record";


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  records: Record[] = [{id: 1, employee: {id: 1, name: "Петя",
                       position: {id: 1, name: "врач"}}, taken: new Date("12/10/2021"),
                       returned: null,
                       device: {id: 1, taken: true, name: 'Шумомер', serialNumber: "133",
                       verificationExpire: new Date('12/10/2022')}},
                       {id: 2, employee: {id: 1, name: "Петя",
                       position: {id: 1, name: "врач"}}, taken: new Date("12/10/2021"),
                       returned: null,
                       device: {id: 2, taken: true, name: 'Линейка', serialNumber: "221",
                       verificationExpire: new Date('11/10/2022')}},
                       {id: 3, employee: {id: 2, name: "Маша",
                       position: {id: 2, name: "инженер"}}, taken: new Date("12/10/2021"),
                       returned: null,
                       device: {id: 1, taken: true, name: 'BE-метр', serialNumber: "1488",
                       verificationExpire: new Date('12/10/2022')}}]

  employeeDevices: Map<Number, Record[]> = new Map<Number, Record[]>();

  constructor() { }

  public convertRecordsToMap() {
    let rslMap: Map<Number, Record[]> = new Map<Number, Record[]>();
    this.records.forEach(record => {
      if (rslMap.has(record.employee.id)) {
        rslMap.get(record.employee.id).push(record);
      } else {
        rslMap.set(record.employee.id, [record])
      }
    })
    return rslMap
  }

  ngOnInit(): void {

  }




}
