import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Device} from "../model/device";
import {Record} from "../model/record";


@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  getAllDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(environment.apiUrl + 'api/v1/devices/')
      .pipe(map(deviceJSONs => {
        let devices = [];
        deviceJSONs.forEach(deviceJSON => {
          devices.push(this.mapJSONToDevice(deviceJSON))
        })
        return devices;
      }));
  }

  mapJSONToDevice(deviceJSON: Object): Device{
    deviceJSON['verificationExpire'] = deviceJSON['verificationExpire'] === 0 ? null : new Date(deviceJSON['verificationExpire'])
    let device = new Device();
    Object.assign(device, deviceJSON)
    return device
  }
}
