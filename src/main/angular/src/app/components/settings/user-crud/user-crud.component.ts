import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Employee} from "../../../model/employee";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {User} from "../../../model/user";
import {UserAddFormComponent} from "./user-add-form/user-add-form.component";
import {UserEditFormComponent} from "./user-edit-form/user-edit-form.component";
import {UserService} from "../../../services/user.service";
import {ROLE_NAMES} from "../../app.component";

@Component({
  selector: 'app-employee-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit, AfterViewInit {

  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  users: User[];
  displayedColumns: string[] = ['index', 'name', 'position', 'role'];
  dataSource = new MatTableDataSource<User>();

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

  constructor(public dialog: MatDialog, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
      this.dataSource.data = users;
    })
  }

  openAddingDialog(): void {
    this.dialog.open(UserAddFormComponent, {
      disableClose: true
    }).afterClosed().subscribe(data => {
      switch (data.status) {
        case 'created': {
          console.log('created')
          this.users.push(data.user)
          this.dataSource.data = this.users;
          this.table.renderRows();
          break;
        }
        case 'canceled': {
          console.log('canceled')
          break;
        }
      }
    });
  }

  openEditingDialog(user: User): void {
    this.dialog.open(UserEditFormComponent, {
      data: user,
      disableClose: true
    }).afterClosed().subscribe(data => {
      let index = this.users.findIndex(x => x.id === user.id)
      switch (data.status) {
        case 'updated': {
          this.users[index] = data.user;
          break;
        }
        case 'removed': {
          this.users.splice(index, 1)
          break;
        }
        case 'canceled': {
          break;
        }
      }
      this.dataSource.data = this.users
      this.table.renderRows();
    });
  }

  getRoleName(key: String) {
    return ROLE_NAMES.get(key)
  }


}


