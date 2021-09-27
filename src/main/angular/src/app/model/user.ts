import {Employee} from "./employee";
import {Authority} from "./authority";

export class User {
  id: number;
  name: string;
  password: string;
  employee: Employee;
  authorities: Authority[];
}
