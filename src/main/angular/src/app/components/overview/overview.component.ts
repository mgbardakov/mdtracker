import { Component, OnInit } from '@angular/core';
import {Employee} from "../../model/employee";
import {Record} from "../../model/record";
import {RecordService} from "../../services/record.service";


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  records: Record[];

  employeeDevices: Map<Number, Record[]> = new Map<Number, Record[]>();

  constructor(private recordService: RecordService) { }

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
     this.recordService.getActiveRecords().subscribe(records => {
       this.records = records;
       this.convertRecordsToMap()
     })
  }




}
