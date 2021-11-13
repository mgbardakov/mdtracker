import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Record} from "../model/record";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http: HttpClient) { }

  getAllRecords(): Observable<Record[]> {
    return this.http.get<Object[]>(environment.apiUrl + 'api/v1/records/')
      .pipe(map(recordJSONs => {
        let records = []
        recordJSONs.forEach(recordJSON => {
          records.push(this.mapJSONToRecord(recordJSON))
        })
        return records;
      }));
  }

  createRecord(record: Record): Observable<Record> {
    let recordDTO = this.mapRecordToJSON(record);
    return this.http.post<Object>(environment.apiUrl + 'api/v1/records/create', recordDTO, {headers: {'Content-Type': 'application/json'}})
      .pipe(map(recordJSON => {
        return this.mapJSONToRecord(recordJSON)
      }));
  }

  updateRecord(record: Record): Observable<Record> {
    let recordDTO = this.mapRecordToJSON(record);
    return this.http.put(environment.apiUrl + 'api/v1/records/update', recordDTO, {headers: {'Content-Type': 'application/json'}})
      .pipe(map(() => {
        console.log(record)
        return record
      }));
  }

  removeRecord(record: Record): Observable<Record> {
    console.log(record);
    let recordDTO = this.mapRecordToJSON(record);
    return this.http.post(environment.apiUrl + 'api/v1/records/delete', recordDTO, {headers: {'Content-Type': 'application/json'}})
      .pipe(map(() => {
        return record
      }))
  }

  getRecordsByRequest(request: any): Observable<Record[]> {
    let params = new HttpParams().set('startDate', request.startDate)
      .append('endDate', request.endDate)
      .append('employeeId', request.employee?.id)
      .append('deviceId', request.device?.id)
    return this.http.get<Object[]>(environment.apiUrl + 'api/v1/records/filter', {params: params})
      .pipe(map(recordDTOs => {
        let records = []
        recordDTOs.forEach(recordDTO => {
          records.push(this.mapJSONToRecord(recordDTO))
        })
        return records;
      }))
  }

  getEmployeesAndDevices(): Observable<Object> {
    return this.http.get<Map<String, Object[]>>(environment.apiUrl + 'api/v1/records/employees-and-devices');

  }

  getActiveRecords(): Observable<Record[]> {
    return this.http.get<Object[]>(environment.apiUrl + 'api/v1/records/active')
      .pipe(map(recordJSONs => {
        let records = [];
        recordJSONs.forEach(recordJSON => {
          records.push(this.mapJSONToRecord(recordJSON))
        })
        return records
      }));
  }


  mapJSONToRecord(recordJSON: Object): Record{
    recordJSON['taken'] = recordJSON['taken'] === 0 ? null : new Date(recordJSON['taken'])
    recordJSON['returned'] = recordJSON['returned'] === 0 ? null : new Date(recordJSON['returned'])
    recordJSON['device']['verificationExpire'] = recordJSON['device']['verificationExpire'] === 0 ? null : new Date(recordJSON['device']['verificationExpire'])
    let record = new Record();
    Object.assign(record, recordJSON)
    return record
  }

  mapRecordToJSON(record: Record): Object {
    let recordDTO = {};
    Object.assign(recordDTO, record)
    recordDTO['taken'] = record.taken.getTime()
    recordDTO['returned'] = record.returned === null ? 0 : record.returned.getTime()
    recordDTO['device']['verificationExpire'] = record.device.verificationExpire == null ? 0 : record.device.verificationExpire.getTime();
    return recordDTO;
  }
}
