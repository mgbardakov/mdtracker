import {Employee} from "./employee";
import {Authority} from "./authority";



export class User {

  id: number;

  login: string;

  password: string;

  employee: Employee;

  authorities: Authority[];
}
