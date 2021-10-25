import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Employee} from "../../../model/employee";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {User} from "../../../model/user";
import {UserAddFormComponent} from "./user-add-form/user-add-form.component";
import {UserEditFormComponent} from "./user-edit-form/user-edit-form.component";

@Component({
  selector: 'app-employee-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
     this.dataSource.sortingDataAccessor = (user, property) => {
       switch(property) {
         case 'position': return user.employee.position.name;
         case 'role': return user.authorities[0].role;
         case 'name': return user.employee.name;
         default: return user[property];
       }
     };
    this.dataSource.sort = this.sort;
  }

  users: User[] = [{id: 1, login: 'bublik337', password: null,
    employee: {id:1, name: "Петя", position: {id: 1, name: 'Инженер'}},
  authorities: [{id:1, role: 'Администратор'}]},
    {id: 1, login: 'kisa666', password: null,
      employee: {id:1, name: "Маша", position: {id: 1, name: 'Инженер'}},
      authorities: [{id:2, role: 'Пользователь'}]}]


  displayedColumns: string[] = ['index', 'name', 'position', 'role'];
  dataSource = new MatTableDataSource<User>(this.users);

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddingDialog(): void {
    this.dialog.open(UserAddFormComponent, {
      //width: '50%'
    });
  }

  openEditingDialog(user: User): void {
    this.dialog.open(UserEditFormComponent, {
      //width: '50%',
      data: user
    });
  }


}
