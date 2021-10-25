import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User} from "../../../../model/user";
import {Authority} from "../../../../model/authority";
import {Position} from "../../../../model/position";
import {passwordMatchValidator} from "../user-add-form/user-add-form.component";

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css']
})
export class UserEditFormComponent implements OnInit {

  form: FormGroup;
  isPasswordFormVisible: boolean;

  constructor(
    public dialogRef: MatDialogRef<UserEditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) {}

  ngOnInit(): void {
    this.form = new FormGroup({password: new FormControl('', Validators.minLength(6)),
      passwordConfirmation: new FormControl(''),
      authorities: new FormControl(this.data.authorities[0], Validators.required),
      name: new FormControl(this.data.employee.name,
        [Validators.required, Validators.minLength(3)]),
      position: new FormControl(this.data.employee.position, Validators.required)
      }, {validators: passwordMatchValidator})
    console.log(JSON.stringify(this.data))
    this.isPasswordFormVisible = false;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  authorities: Authority[] = [{id:1, role: "Администратор"},
    {id:2, role: "Пользователь"}]

  positions: Position[] = [{id:1, name: "инженер"},
    {id:2, name: "врач"}]

  public getUser(): User {
    return {id: this.data.id, authorities: [this.form.controls['authorities'].value],
      login: this.data.login,
      password: this.form.controls['password'].value,
      employee: {id: this.data.employee.id, name: this.form.controls['name'].value,
        position: this.form.controls['position'].value}}
  }

  submit() {
    this.form.controls['authorities'].setValue([this.form.controls['authorities'].value])
    console.log(JSON.stringify(this.getUser()))
  }

  public objectComparisonFunction = function(option, value) : boolean {
    return option.id == value.id
  }

  openChangePasswordForm() {
    this.isPasswordFormVisible = !this.isPasswordFormVisible;
  }
}


