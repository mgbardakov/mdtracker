import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Employee} from "../../../model/employee";
import {Device} from "../../../model/device";
import {Record} from "../../../model/record";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCrudComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
     this.dataSource.sortingDataAccessor = (employee, property) => {
       switch(property) {
         case 'position': return employee.position.name;
         default: return employee[property];
       }
     };
    this.dataSource.sort = this.sort;
  }

  employees: Employee[] = [{id:1, name: "Петя", position: {id: null, name: 'Инженер'}, devices:null},
    {id:2, name: "Маша", position: {id: null, name: 'Врач'}, devices:null}]


  displayedColumns: string[] = ['index', 'name', 'position'];
  dataSource = new MatTableDataSource<Employee>(this.employees);

  constructor() { }

  ngOnInit(): void {
  }

}
