import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {Position} from "../../../model/position";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {PositionFormComponent} from "./position-form/position-form.component";
import {PositionService} from "../../../services/position.service";
import {RecordFormComponent} from "../../journal/record-form/record-form.component";
import {Record} from "../../../model/record";

@Component({
  selector: 'app-position-crud',
  templateUrl: './position-crud.component.html',
  styleUrls: ['./position-crud.component.css']
})
export class PositionCrudComponent implements OnInit, AfterViewInit {

  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  positions: Position[];


  displayedColumns: string[] = ['index', 'name'];
  dataSource = new MatTableDataSource<Position>();

  constructor(public dialog: MatDialog, private positionService: PositionService) { }

  ngOnInit(): void {
    this.positionService.getAllPositions().subscribe(positions => {
      this.positions = positions;
      this.dataSource.data = this.positions;
    })
  }

  openDialog(position: Position): MatDialogRef<PositionFormComponent> {
    return this.dialog.open(PositionFormComponent, {
      width: '300px',
      data: position,
      disableClose: true
    });
  }

  createPosition() {
    this.openDialog(null).afterClosed().subscribe(data => {
      switch (data.status) {
        case 'created': {
          this.positions.push(data.position)
          this.dataSource.data = this.positions;
          this.table.renderRows();
          break
        }
        case 'canceled': {
          break;
        }
      }

    })
  }

  updatePosition(position: Position) {
    this.openDialog(position).afterClosed().subscribe(data => {
      let index = this.positions.findIndex(x => x.id === position.id)
      console.log(data)
      switch (data.status) {
        case 'update': {
          console.log('updated')
          this.positions[index] = data.position;
          break;
        }
        case 'remove': {
          console.log('removed')
          this.positions.splice(index, 1)
          break;
        }
        case 'canceled': {
          console.log('canceled')
          break;
        }
      }
      this.dataSource.data = this.positions
      this.table.renderRows();
    })
  }

}
