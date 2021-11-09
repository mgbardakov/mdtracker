import { Injectable } from '@angular/core';
import {DeviceService} from "./device.service";
import {Device} from "../model/device";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {RecordService} from "./record.service";
import {Record} from "../model/record";


@Injectable({
  providedIn: 'root'
})
export class RegisterDeviceService {

  constructor(private deviceService: DeviceService,
              private recordService: RecordService,
              private http: HttpClient) { }

  registerDevices(devices: Device[]) {
    let deviceDTOs = devices.map(x => this.deviceService.mapDeviceToJSON(x));
    return this.http.post(environment.apiUrl + 'api/v1/register/', deviceDTOs);
  }

  closeRecord(record: Record): Observable<Record> {
    let recordDTO = this.recordService.mapRecordToJSON(record);
    return this.http.put(environment.apiUrl + 'api/v1/register/close', recordDTO)
      .pipe(map(recordDTO => this.recordService.mapJSONToRecord(recordDTO)));
  }

  closeAllRecords() {
    return this.http.put(environment.apiUrl + 'api/v1/register/close-all', {})
      .pipe(map(() => true));
  }

  getAllActiveRecords(): Observable<Record[]> {
    return this.http.get<Object[]>(environment.apiUrl + 'api/v1/register/active-records')
      .pipe(map(recordDTOs => {
        let records = [];
        recordDTOs.forEach(recordDTO => records.push(this.recordService.mapJSONToRecord(recordDTO)));
        return records;
      }))
  }
}
