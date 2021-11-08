import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "@angular/material/dialog";
import {User} from "../../../../model/user";
import {Authority} from "../../../../model/authority";
import {Position} from "../../../../model/position";
import {passwordMatchValidator} from "../user-add-form/user-add-form.component";
import {UserService} from "../../../../services/user.service";
import {PositionService} from "../../../../services/position.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ErrorComponent} from "../../../error/error.component";
import {AuthService} from "../../../../services/security/auth.service";
import {ROLE_NAMES} from "../../../app.component";


@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css']
})
export class UserEditFormComponent implements OnInit {

  form: FormGroup;
  isPasswordFormVisible: boolean;
  authorities: Authority[];
  positions: Position[];
  submitDisabled: boolean;
  deleteDisabled: boolean;


  constructor(
    public dialogRef: MatDialogRef<UserEditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private userService: UserService,
    private positionService: PositionService,
    private auth: AuthService,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.form = new FormGroup({password: new FormControl('', Validators.minLength(6)),
      passwordConfirmation: new FormControl(''),
      authorities: new FormControl({value: this.data.authorities[0],
        disabled: this.auth.getCurrentEmployee().id === this.data.employee.id}, Validators.required),
      name: new FormControl(this.data.employee.name,
        [Validators.required, Validators.minLength(3)]),
      position: new FormControl(this.data.employee.position, Validators.required)
      }, {validators: passwordMatchValidator})
    console.log(JSON.stringify(this.data))
    this.isPasswordFormVisible = false;
    this.userService.getAllAuthorities().subscribe(authorities => {
      this.authorities = authorities;
    })
    this.positionService.getAllPositions().subscribe(positions => {
      this.positions = positions
    })
    this.submitDisabled = false;
    this.deleteDisabled = false;
  }

  onNoClick(): void {
    this.dialogRef.close({status: 'canceled'});
  }

  updateUser() {
    this.submitDisabled = true;
    this.userService.updateUser(this.getUser()).subscribe(() => {
      this.dialogRef.close({status: 'updated', user: this.getUser()})
    }, error => {
      this.errorHandler(error)
      this.submitDisabled = false;
    })
  }

  deleteUser() {
    this.deleteDisabled = true;
    this.userService.removeUser(this.getUser()).subscribe(() => {
      this.dialogRef.close({status: 'removed', user: this.getUser()})
    }, error => {
      this.errorHandler(error)
      this.deleteDisabled = false;
    })
  }



  public getUser(): User {
    this.form.controls['authorities'].setValue(this.form.controls['authorities'].value)
    return {id: this.data.id, authorities: [this.form.controls['authorities'].value],
      login: this.data.login,
      password: this.form.controls['password'].value,
      employee: {id: this.data.employee.id, name: this.form.controls['name'].value,
        position: this.form.controls['position'].value}}
  }

  private errorHandler(error: HttpErrorResponse) {
    switch (error.status) {
      case 401: {
        this.dialog.open(ErrorComponent, {
          width: '200px',
          data: {message: "Недостаточно прав"}
        });
        break;
      }
      case 406: {
        this.dialog.open(ErrorComponent, {
          width: '200px',
          data: {message: "Выбранный логин занят"}
        });
        break;
      }
      default: {
        this.dialog.open(ErrorComponent, {
          width: '200px',
          data: {message: "Неизвестная ошибка"}
        });
        break;
      }
    }
  }
  getRoleName(name: string): string {
    return ROLE_NAMES.get(name);
  }


  isSubmitDisabled() {
    return this.form.invalid || this.submitDisabled;
 }
  isDeleteDisabled() {
    return this.auth.getCurrentEmployee().id === this.data.employee.id ||
      this.deleteDisabled;
  }

  public objectComparisonFunction = function(option, value) : boolean {
    return option.id == value.id
  }

  openChangePasswordForm() {
    this.isPasswordFormVisible = !this.isPasswordFormVisible;
  }
}


