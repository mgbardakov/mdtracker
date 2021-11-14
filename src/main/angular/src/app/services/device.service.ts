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
    return this.http.get<Device[]>('/api/v1/devices/')
      .pipe(map(deviceJSONs => {
        let devices = [];
        deviceJSONs.forEach(deviceJSON => {
          devices.push(this.mapJSONToDevice(deviceJSON))
        })
        return devices;
      }));
  }

  createDevice(device: Device): Observable<Device> {
    let deviceDTO = this.mapDeviceToJSON(device);
    return this.http.post<Object>('/api/v1/devices/create',
      deviceDTO, {headers: {'Content-Type': 'application/json'}})
      .pipe(map(deviceJSON => this.mapJSONToDevice(deviceJSON)));
  }

  updateDevice(device: Device): Observable<Device> {
    let deviceDTO = this.mapDeviceToJSON(device);
    return this.http.put('/api/v1/devices/update',
      deviceDTO, {headers: {'Content-Type': 'application/json'}})
      .pipe(map(() => {
        return device
      }));
  }

  removeDevice(device: Device): Observable<Device> {
    let deviceDTO = this.mapDeviceToJSON(device);
    return this.http.post('/api/v1/devices/delete', deviceDTO,
      {headers: {'Content-Type': 'application/json'}})
      .pipe(map(() => {
        return device
      }))
  }

  mapJSONToDevice(deviceJSON: Object): Device{
    deviceJSON['verificationExpire'] = deviceJSON['verificationExpire'] === 0 ? null : new Date(deviceJSON['verificationExpire'])
    let device = new Device();
    Object.assign(device, deviceJSON)
    return device
  }

  mapDeviceToJSON(device: Device): Object {
    let deviceDTO = {};
    Object.assign(deviceDTO, device)
    deviceDTO['verificationExpire'] = device.verificationExpire === null ? null : device.verificationExpire.getTime()
    return deviceDTO;
  }
}
