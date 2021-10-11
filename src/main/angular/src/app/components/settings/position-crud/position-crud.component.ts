import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Position} from "../../../model/position";

@Component({
  selector: 'app-position-crud',
  templateUrl: './position-crud.component.html',
  styleUrls: ['./position-crud.component.css']
})
export class PositionCrudComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  positions: Position[] = [{id: 1, name: 'Инженер'},
    {id: 2, name: 'Врач'}]


  displayedColumns: string[] = ['index', 'name'];
  dataSource = new MatTableDataSource<Position>(this.positions);

  constructor() { }

  ngOnInit(): void {
  }

}
