import {Employee} from "./employee";
import {Device} from "./device";



export class Record {

  id: number;

  taken: Date;

  returned: Date;

  employee: Employee;

  device: Device;
}
