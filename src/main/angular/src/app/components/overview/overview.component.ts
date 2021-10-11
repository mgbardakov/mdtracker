import { Component, OnInit } from '@angular/core';
import {Employee} from "../../model/employee";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  employees: Employee[] = [{id: null, name: 'Петя', position: null,
    devices: [{id: null, name: 'Шумомер', serialNumber: '1337', taken: null, verificationExpire: null},
    {id: null, name: 'Флюгер', serialNumber: '1488', taken: null, verificationExpire: null}]},
    {id: null, name: 'Маша', position: null,
      devices: [{id: null, name: 'Люксметр', serialNumber: '1425', taken: null, verificationExpire: null},
        {id: null, name: 'Рулетка', serialNumber: '666', taken: null, verificationExpire: null}]},
    {id: null, name: 'Вася', position: null,
      devices: [{id: null, name: 'Лазерный дозиметр', serialNumber: '1388', taken: null, verificationExpire: null},
        {id: null, name: 'Шприц', serialNumber: '333', taken: null, verificationExpire: null}]}]

  constructor() { }

  ngOnInit(): void { }




}
